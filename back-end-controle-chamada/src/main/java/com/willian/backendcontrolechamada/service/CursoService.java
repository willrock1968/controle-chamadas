package com.willian.backendcontrolechamada.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.entity.Curso;
import com.willian.backendcontrolechamada.repository.CursoRepository;

@Service
public class CursoService {

	@Autowired
	private CursoRepository cursoRepository;
	
	public List<Curso> getCurso() {
        
    	return cursoRepository.consultaCursoETipoNivel();   	
    } 
	
    public Curso saveCurso(Curso curso) {
        
    	return cursoRepository.save(curso);    	
    }        
    
}
