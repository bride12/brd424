package edu.wgu.d424_sample_code.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class TimeController {

    @GetMapping("/presentation")
    public ResponseEntity<String> timePresentation() {
        String times = "A complimentary hotel amenity tour will begin at: " + TimeConvert.getTime();
        return new ResponseEntity<String>(times, HttpStatus.OK);
    }
}
