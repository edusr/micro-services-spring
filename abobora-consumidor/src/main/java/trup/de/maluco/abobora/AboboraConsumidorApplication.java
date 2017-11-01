package trup.de.maluco.abobora;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;


@SpringBootApplication
@EnableCircuitBreaker
@EnableFeignClients
@EnableHystrixDashboard
public class AboboraConsumidorApplication {

	public static void main(String[] args) {
		SpringApplication.run(AboboraConsumidorApplication.class, args);
	}
	
}	
