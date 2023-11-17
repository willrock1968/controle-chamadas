package com.willian.backendcontrolechamada.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.willian.backendcontrolechamada.entity.Aula;
import com.willian.backendcontrolechamada.service.ChamadaService;

@RestController
@RequestMapping("/api")
public class ChamadaController {
	
	@Autowired
	private ChamadaService chamadaService;
	
	@PostMapping("/selecionaAlunosMatriculadosAulaTurma")
	public List<Object[]> selecionaAlunosMatriculadosAulaTurma(@RequestBody Aula aula)
	{
		return chamadaService.selecionaAlunosMatriculadosAulaTurma(aula);
	}

}
