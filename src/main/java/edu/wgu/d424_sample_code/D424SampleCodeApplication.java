package edu.wgu.d424_sample_code;

import edu.wgu.d424_sample_code.controllers.WelcomeMessage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Locale;

@SpringBootApplication
public class D424SampleCodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(D424SampleCodeApplication.class, args);

		WelcomeMessage engWelcomeMessage = new WelcomeMessage(Locale.US);
		WelcomeMessage frWelcomeMessage = new WelcomeMessage(Locale.CANADA_FRENCH);
		Thread englishThread = new Thread(engWelcomeMessage);
		Thread frenchThread = new Thread(frWelcomeMessage);
		englishThread.start();;
		frenchThread.start();;
	}

}
