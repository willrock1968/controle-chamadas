package com.willian.backendcontrolechamada.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.willian.backendcontrolechamada.entity.Curso;
import com.willian.backendcontrolechamada.entity.NivelCurso;
import com.willian.backendcontrolechamada.entity.Turma;
import com.willian.backendcontrolechamada.service.CursoService;
import com.willian.backendcontrolechamada.service.TurmaService;

@RestController
@RequestMapping("/api")
public class TurmaController {
	
	@Autowired
	private TurmaService turmaService;
	
	@Autowired
	private CursoService cursoService;
	
	@GetMapping("/getTurma")
	public List<Turma> getTurma(){
		return turmaService.getTurma();
	}
	
	@PostMapping("/saveTurma")
	public Turma saveTurma(@RequestBody Turma turma)
	{	
		Curso curso = cursoService.findById(turma.getIdCurso());
		turma.setCurso(curso);
		return turmaService.saveTurma(turma);	
	}	

}
