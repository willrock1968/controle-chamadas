package com.willian.backendcontrolechamada.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.willian.backendcontrolechamada.entity.Matricula;

@Repository
public interface MatriculaRepository extends JpaRepository<Matricula, Integer>{
	@Query("SELECT t, a, m FROM Matricula m " +
	           "JOIN m.turma t " +
	           "JOIN m.aluno a")
	    List<Object[]> getMatriculas();
}
