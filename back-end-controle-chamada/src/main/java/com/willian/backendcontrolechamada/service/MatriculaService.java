package com.willian.backendcontrolechamada.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.entity.Aluno;
import com.willian.backendcontrolechamada.entity.Matricula;
import com.willian.backendcontrolechamada.repository.MatriculaRepository;

@Service
public class MatriculaService {
	
	@Autowired
	private MatriculaRepository matriculaRepository;
	
	public Matricula matricularAluno(Matricula matricula)
	{
		return matriculaRepository.save(matricula);
	}
	
		
	public List<Matricula> getMatriculas()
	{
		return matriculaRepository.findAll();
	}

}
