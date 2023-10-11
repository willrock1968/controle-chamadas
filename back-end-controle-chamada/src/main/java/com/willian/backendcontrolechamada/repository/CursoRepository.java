package com.willian.backendcontrolechamada.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.willian.backendcontrolechamada.entity.Curso;


public interface CursoRepository extends JpaRepository<Curso, Integer>{
	
	@Query("SELECT c, n.tipo FROM Curso c JOIN c.nivelCurso n")
    List<Curso> consultaCursoETipoNivel();
}
