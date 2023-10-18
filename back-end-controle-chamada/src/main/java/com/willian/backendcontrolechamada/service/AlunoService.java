package com.willian.backendcontrolechamada.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.dto.AlunoMatriculaDTO;
import com.willian.backendcontrolechamada.entity.Aluno;
import com.willian.backendcontrolechamada.entity.Matricula;
import com.willian.backendcontrolechamada.repository.AlunoRepository;

@Service
public class AlunoService {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	public List<AlunoMatriculaDTO> getAlunoMatricula() {
	    List<Object[]> results = alunoRepository.getAlunoMatricula();
	    Map<Aluno, AlunoMatriculaDTO> alunoDTOs = new HashMap<>();

	    for (Object[] result : results) {
	        Aluno aluno = (Aluno) result[0];
	        Matricula matricula = (Matricula) result[1];

	        if (!alunoDTOs.containsKey(aluno)) {
	            AlunoMatriculaDTO alunoDTO = new AlunoMatriculaDTO(aluno);
	            alunoDTOs.put(aluno, alunoDTO);
	        }

	        if (matricula != null) {
	            alunoDTOs.get(aluno).addMatricula(matricula);
	        }
	    }

	    return new ArrayList<>(alunoDTOs.values());
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
