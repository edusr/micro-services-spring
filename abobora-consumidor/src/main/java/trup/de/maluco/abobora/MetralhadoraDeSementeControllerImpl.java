package trup.de.maluco.abobora;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MetralhadoraDeSementeControllerImpl implements MetralhadoraDeSementeController{

	@Autowired
	private SementeService sementeService;

	public String getMetralhadora() {
		
		return sementeService.getMetralhadora();
	}



}
