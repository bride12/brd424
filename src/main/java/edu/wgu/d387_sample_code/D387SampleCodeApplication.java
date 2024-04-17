package edu.wgu.d387_sample_code;

import edu.wgu.d387_sample_code.controllers.WelcomeMessage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

import java.util.Locale;

@SpringBootApplication
public class D387SampleCodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(D387SampleCodeApplication.class, args);

		WelcomeMessage engWelcomeMessage = new WelcomeMessage(Locale.US);
		WelcomeMessage frWelcomeMessage = new WelcomeMessage(Locale.CANADA_FRENCH);
		Thread englishThread = new Thread(engWelcomeMessage);
		Thread frenchThread = new Thread(frWelcomeMessage);
		englishThread.start();;
		frenchThread.start();;
	}

}
