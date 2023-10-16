package com.willian.backendcontrolechamada.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.willian.backendcontrolechamada.entity.Aluno;
import com.willian.backendcontrolechamada.service.AlunoService;

@RestController
@RequestMapping("/api")
public class AlunoController {
	
	@Autowired
	private AlunoService alunoService;
	
	@GetMapping("/getAluno")
	private List<Aluno> getAluno()
	{
		return alunoService.getAluno();
	}
	
	@PostMapping("/saveAluno")
	private Aluno saveAluno(@RequestBody Aluno aluno)
	{
		return alunoService.saveAluno(aluno);
	}


}
