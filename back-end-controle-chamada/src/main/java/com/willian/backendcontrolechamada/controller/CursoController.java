package com.willian.backendcontrolechamada.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.willian.backendcontrolechamada.entity.Curso;
import com.willian.backendcontrolechamada.entity.NivelCurso;
import com.willian.backendcontrolechamada.service.CursoService;
import com.willian.backendcontrolechamada.service.NivelCursoService;


@RestController
@RequestMapping("/api")
public class CursoController {
	
	@Autowired
	private CursoService cursoService;
	
	@Autowired
    private NivelCursoService nivelCursoService; 
	
	@GetMapping("/getCurso")
	public List<Curso> getCurso()
	{		
		return cursoService.getCurso();
	}
	
	@PostMapping("/saveCurso")
	public Curso saveCurso(@RequestBody Curso curso)
	{	
		NivelCurso nivelCurso = nivelCursoService.findById(curso.getIdNivel());
	    curso.setNivelCurso(nivelCurso);
		return cursoService.saveCurso(curso);	
	}	
	
	
	
	/*@PostMapping("/saveCurso")
	public ResponseEntity<Curso> saveCurso(@RequestBody Curso curso) {
	    		
	    NivelCurso nivelCurso = nivelCursoService.findById(curso.getIdNivel());
	    curso.setNivelCurso(nivelCurso);
	    return ResponseEntity.status(HttpStatus.OK).body(curso);
	}*/

	
	
	
}
