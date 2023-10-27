package com.willian.backendcontrolechamada.controller;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.willian.backendcontrolechamada.entity.Aula;
import com.willian.backendcontrolechamada.entity.Turma;
import com.willian.backendcontrolechamada.service.AulaService;
import com.willian.backendcontrolechamada.service.TurmaService;

@RestController
@RequestMapping("/api")
public class AulaController {
	
	@Autowired
	private AulaService aulaService;
	
	@Autowired
	private TurmaService turmaService;
	
	@GetMapping("/getAula")
	public List<Aula> getAula()
	{
		return aulaService.getAula();
	}
	
	@PostMapping("/saveAula")
	public Aula saveAula(@RequestBody Aula aula)
	{
		Turma turma = turmaService.getTurmaByIdy(aula.getIdTurma());
		aula.setTurma(turma);	
		return aulaService.saveAula(aula);
	}

}
