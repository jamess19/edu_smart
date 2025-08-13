package com.edusmart.auth.service;

import com.edusmart.auth.dto.IntrospectRequest;
import com.edusmart.auth.dto.IntrospectResponse;
import com.edusmart.common.exception.ErrorCode;
import com.edusmart.dto.ApiResponse;
import com.edusmart.user.model.User;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.experimental.NonFinal;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Service
public class JwtService {

    @NonFinal
    @Value("${jwt.secret}")
    protected String SIGNER_KEY;

    public String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);
        JWTClaimsSet claimSet = new JWTClaimsSet.Builder()
                .subject(user.getUsername())
                .issuer("James19")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()
                ))
                .claim("userId", user.getId())
                .claim("scope", user.getUser_type())
                .build();

        Payload payload = new Payload(claimSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);

        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            throw new RuntimeException(e);
        }
    }

    public ApiResponse<IntrospectResponse> introspect(IntrospectRequest request)
            throws JOSEException, ParseException {
        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());

        SignedJWT signedJWT = SignedJWT.parse(request.getToken());
        // Kiểm tra token het han chua
        Date expiryTime = signedJWT.getJWTClaimsSet().getExpirationTime();
        var verified = signedJWT.verify(verifier);

        if (verified && expiryTime.after(new Date())) {
            IntrospectResponse res = IntrospectResponse.builder()
                    .valid(verified && expiryTime.after(new Date())).build();
            return ApiResponse.success(res, "introspect success");
        }
        return ApiResponse.error(ErrorCode.NOT_FOUND);
    }

    public JSONObject decode(String token) throws ParseException, JOSEException {
        JWSObject parsedObject = JWSObject.parse(token);
        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());
        if (!parsedObject.verify(verifier)) {
            throw new RuntimeException("Invalid token signature");
        }
        return new JSONObject(parsedObject.getPayload().toJSONObject());
    }
}
