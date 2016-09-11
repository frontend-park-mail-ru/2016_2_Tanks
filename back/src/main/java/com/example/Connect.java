package com.example;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jake on 10.09.16.
 */
@RestController
public class Connect {
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public ResponseEntity login(@RequestParam(name = "lastLogin", required = false) String login) {
        System.out.println('+');
        return   ResponseEntity.ok(new SuccessResponse(login));
    }

    private static final class SuccessResponse {
        private String login;

        private SuccessResponse(String login) {
            this.login = login;
        }



        public String getLogin() {
            return login;
        }
    }


}

