package com.willian.backendcontrolechamada.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.willian.backendcontrolechamada.entity.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Integer>{
	@Query("SELECT a FROM Aluno a WHERE a.idaluno = :idaluno")
	Aluno getAlunoByIdy(int idaluno);
	
	    
    @Query("SELECT a, m FROM Aluno a LEFT JOIN Matricula m ON a = m.aluno")
    List<Object[]> getAlunoMatricula();


}
