package edu.wgu.d387_sample_code.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WelcomeMessageController {

    @GetMapping("/welcome")
    public ResponseEntity<String> showWelcome (@RequestParam("lang") String lang) {
        Locale locale = Locale.forLanguageTag(lang);
        WelcomeMessage message = new WelcomeMessage(locale);

        return new ResponseEntity<String>(message.getWelcomeMessage(), HttpStatus.OK);
    }
}
