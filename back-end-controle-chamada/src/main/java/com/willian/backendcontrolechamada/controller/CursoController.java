package com.willian.backendcontrolechamada.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.willian.backendcontrolechamada.entity.Curso;
import com.willian.backendcontrolechamada.service.CursoService;


@RestController
@RequestMapping("/api")
public class CursoController {
	
	@Autowired
	private CursoService cursoService;
	
	@GetMapping("/getCurso")
	public List<Curso> getCurso()
	{		
		return cursoService.getCurso();
	}
	
	@PostMapping("/saveCurso")
	public Curso saveCurso(@RequestBody Curso curso)
	{		
		return cursoService.saveCurso(curso);	
	}

}
