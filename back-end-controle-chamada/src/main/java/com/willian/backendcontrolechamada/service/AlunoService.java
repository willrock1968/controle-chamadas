package com.willian.backendcontrolechamada.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.entity.Aluno;
import com.willian.backendcontrolechamada.repository.AlunoRepository;

@Service
public class AlunoService {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	public List<Aluno> getAluno()
	{
		return alunoRepository.findAll();
	}
	
	public Aluno saveAluno(Aluno aluno)
	{
		return alunoRepository.save(aluno);
	}

}
