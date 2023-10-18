package com.willian.backendcontrolechamada.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.entity.Aluno;
import com.willian.backendcontrolechamada.entity.Curso;
import com.willian.backendcontrolechamada.entity.Turma;
import com.willian.backendcontrolechamada.repository.TurmaRepository;

@Service
public class TurmaService {

	@Autowired
	private TurmaRepository turmaRepository;
	
	public List<Turma> getTurma()
	{
		return turmaRepository.consultaTurmaECurso();
	}
	
	public Turma saveTurma(Turma turma) {
        
    	return turmaRepository.save(turma);    	
    } 
	
	public Turma  getTurmaByIdy(int idturma)
	{
		return turmaRepository.getTurmaByIdy(idturma);
	}
}
