package com.willian.backendcontrolechamada.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.entity.NivelCurso;
import com.willian.backendcontrolechamada.repository.NivelCursoRepository;



@Service
public class NivelCursoService {
		
	@Autowired
	private NivelCursoRepository nivelCursoRepository;
	
    public NivelCurso saveNivelCurso(NivelCurso nivelCurso) {
        
    	return nivelCursoRepository.save(nivelCurso);    	
    }    
    
}



