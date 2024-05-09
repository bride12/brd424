package edu.wgu.d424_sample_code.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

// Class inheritance example
@CrossOrigin(origins = "http://localhost:4200")
public class TimeConvert {

    public static String getTime(){

        ZonedDateTime time = ZonedDateTime.now();

        ZonedDateTime ET = time.withZoneSameInstant(ZoneId.of("America/New_York"));
        ZonedDateTime PT = time.withZoneSameInstant(ZoneId.of("America/Los_Angeles"));
        //ZonedDateTime UTC = time.withZoneSameInstant(ZoneId.of("UTC"));

        String timePattern = "hh:mm a";
        DateTimeFormatter timePatternFormatter = DateTimeFormatter.ofPattern(timePattern);

        String displayTimes = ET.format(timePatternFormatter) + " ET / " + PT.format(timePatternFormatter) +
                " PT"; // / "  + UTC.format(timePatternFormatter) + " UTC";

        return displayTimes;
    }

}
