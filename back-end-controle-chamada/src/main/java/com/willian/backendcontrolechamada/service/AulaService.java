package com.willian.backendcontrolechamada.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.entity.Aula;
import com.willian.backendcontrolechamada.repository.AulaRepository;

@Service
public class AulaService {
	
	@Autowired
	private AulaRepository aulaRepository;
	
	public List<Aula> getAula()
	{
		return aulaRepository.consultaAulaETurma();
	}
	
	public Aula saveAula(Aula aula)
	{
		return aulaRepository.save(aula);
	}

}
