package com.willian.backendcontrolechamada.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.willian.backendcontrolechamada.entity.Aluno;
import com.willian.backendcontrolechamada.entity.Turma;

@Repository
public interface TurmaRepository extends JpaRepository<Turma, Integer> {
			
	@Query("SELECT t FROM Turma t JOIN t.curso c")
	List<Turma> consultaTurmaECurso();
	
	@Query("SELECT t FROM Turma t WHERE t.idturma = :idturma")
	Turma getTurmaByIdy(int idturma);

}
