package com.willian.backendcontrolechamada.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.dto.AlunoMatriculaDTO;
import com.willian.backendcontrolechamada.entity.Aluno;
import com.willian.backendcontrolechamada.repository.AlunoRepository;

@Service
public class AlunoService {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	public List<Object[]> getAlunoMatricula()
	{
		return alunoRepository.getAlunoMatricula();
	}
	
	public Aluno  getAlunoById(int idaluno)
	{
		return alunoRepository.getAlunoByIdy(idaluno);
	}
	
	public Aluno saveAluno(Aluno aluno)
	{
		return alunoRepository.save(aluno);
	}

}
