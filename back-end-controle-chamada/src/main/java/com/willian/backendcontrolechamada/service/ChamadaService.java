package com.willian.backendcontrolechamada.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.entity.Aula;
import com.willian.backendcontrolechamada.repository.ChamadaRepository;

@Service
public class ChamadaService {
	
	@Autowired
	private ChamadaRepository chamadaRepository;
	
	public List<Object[]> selecionaAlunosMatriculadosAulaTurma(Aula aula)
	{
		return chamadaRepository.selecionaAlunosMatriculadosAulaTurma(aula.getIdaula());
	}

}
