package trup.de.maluco.abobora;

import org.springframework.web.bind.annotation.RequestMapping;

public interface MetralhadoraDeSementeController {
	
	@RequestMapping("/metralhadora")
	public String getMetralhadora();

}
