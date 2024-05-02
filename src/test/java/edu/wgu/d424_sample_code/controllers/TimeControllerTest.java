package edu.wgu.d424_sample_code.controllers;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

// Test verifying time conversion

class TimeControllerTest {

    @Test
    public void timePresentationTest() {

        System.out.println("Current time: " + TimeConvert.getTime());
        assertEquals("03:36 PM ET / 12:36 PM PT", TimeConvert.getTime());

    }
}