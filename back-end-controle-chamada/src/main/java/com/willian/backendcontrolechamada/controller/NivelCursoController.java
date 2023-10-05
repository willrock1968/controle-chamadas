package com.willian.backendcontrolechamada.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.willian.backendcontrolechamada.entity.NivelCurso;
import com.willian.backendcontrolechamada.service.NivelCursoService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
public class NivelCursoController {
	
	@Autowired
	private NivelCursoService nivelCursoService;
	
	@GetMapping("/getNivelCurso")
	public List<NivelCurso> getNivelCurso()
	{		
		return nivelCursoService.getNivelCurso();		
	}
	
	@PostMapping("/saveNivelCurso")
	public NivelCurso saveNivelCurso(@RequestBody NivelCurso nivelCurso)
	{		
		return nivelCursoService.saveNivelCurso(nivelCurso);		
	}

}
