package trup.de.maluco.authserver;

import java.security.Principal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
//@EnableDiscoveryClient
@RestController
public class AuthserverApplication extends WebMvcConfigurerAdapter{

	public static void main(String[] args) {
		SpringApplication.run(AuthserverApplication.class, args);
	}

	@RequestMapping("/user")
	public Principal user(Principal user) {
		System.out.println();
		return user;
	}

}
