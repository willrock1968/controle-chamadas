package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import NivelCursoService.NivelCursoService;
import entity.NivelCurso;

@RestController
@RequestMapping("/api")
public class NivelCursoController {
	
	@Autowired
	private NivelCursoService nivelCursoService;
	
	@PostMapping("/saveNivelCurso")
	public void saveNivelCurso(@RequestParam("tipo") String tipo)
	{
		NivelCurso nivelCurso = new NivelCurso();
		nivelCurso.setTipo(tipo);
		nivelCursoService.saveNivelCurso(nivelCurso);
	}

}
