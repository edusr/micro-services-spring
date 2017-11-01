package trup.de.maluco.abobora;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@Service
public class SementeService {
	
    @HystrixCommand(fallbackMethod = "metralhadoraSemSemente")
    public String getMetralhadora() {
        return new RestTemplate().getForObject("http://localhost:8765/abobora/service-instances",
        		String.class);
    }
    
    public String metralhadoraSemSemente() {
    	return "Metralhadora de semente descarregada";
    }

}
