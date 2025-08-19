package com.edusmart.common.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import javax.crypto.spec.SecretKeySpec;
import java.util.List;

@Configuration
@EnableWebSecurity

// Xem lại cấu hình security kĩ kĩ
// HIỆN TẠI ĐÃ ĐƯỢC:
// mã hoá password bằng PasswordEncoder
// generate Token sử dụng JWSHeader, JWSClaimerSet cho Payload, SignedJWT
// cần xem thêm về cấu hình authentication
public class SecurityConfig {
    @Value("${jwt.secret}")
    private String SIGNER_KEY;
    private CustomUserDetailService userDetailsService;
    @Autowired
    public SecurityConfig(CustomUserDetailService userDetailServices) {
        this.userDetailsService = userDetailServices;
    }

    // cấu hình securityFilterChain
    @Bean
    public SecurityFilterChain filterChain (HttpSecurity http) throws Exception{
        // endpoint register va login la public
        String[] PUBLIC_ENDPOINT = {"/api/v1/auth/**"};

        http.authorizeHttpRequests(request ->
                request.requestMatchers(HttpMethod.POST, PUBLIC_ENDPOINT)
                        .permitAll().anyRequest().authenticated()) // có thể match các request với method và endpoint chỉ định với quyền authority
                .csrf(AbstractHttpConfigurer::disable)
                .cors(cors -> {});
//                .authenticationManager(authenticationManager()); // <- last step: add this to tell filter chain use your custom authentication manager
        // Xem lại phần này
        http.oauth2ResourceServer(oauth2 -> oauth2.jwt(jwtConfigurer -> jwtConfigurer.decoder(jwtDecoder())));
        return http.build();
    }

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:3000")); // Domain Next.js
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true); // Cho phép cookie/token

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
    @Bean
    JwtDecoder jwtDecoder() {
        SecretKeySpec secretKey = new SecretKeySpec(SIGNER_KEY.getBytes(), "HS256");
        return NimbusJwtDecoder.withSecretKey(secretKey)
                .macAlgorithm(MacAlgorithm.HS256)
                .build();
    }
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }

//  you may want to authenticate users via a REST API instead of using Form Login.
//    Step 1: create custom authentication manager
    @Bean
    AuthenticationManager authenticationManager() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider(userDetailsService);
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        ProviderManager manager = new ProviderManager(authenticationProvider);
        manager.setEraseCredentialsAfterAuthentication(false); // <- add this
        return manager;
    }

//    Initially,  Spring Security builds an AuthenticationManager internally
//    composed of a DaoAuthenticationProvider for username/password authentication
//    Sometimes, you may need to simply disable credential erasure for cached users.
//    To do this, configure the AuthenticationManagerBuilder By following
//    or add one line on custom authenticationManager:
//    @Autowired
//    public void configure(AuthenticationManagerBuilder builder) {
//        builder.eraseCredentials(false);
//    }

//    Step 2: Create Custom UserDetailsService
//    Step 3: Create passwordEncoder
//    Step 4: See more in auth controller

}
