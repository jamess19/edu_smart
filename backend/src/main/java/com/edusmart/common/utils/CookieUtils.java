package com.edusmart.common.utils;

import jakarta.servlet.http.Cookie;
import org.springframework.stereotype.Component;

@Component
public class CookieUtils {
    public Cookie create(String token) {
        Cookie cookie = new Cookie("jwt", token);
        cookie.setHttpOnly(true);
        cookie.setMaxAge(3600);
        cookie.setSecure(false);
        cookie.setPath("/");
        return cookie;
    }
}
