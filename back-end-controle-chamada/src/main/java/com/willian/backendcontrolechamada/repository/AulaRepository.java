package com.willian.backendcontrolechamada.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.willian.backendcontrolechamada.entity.Aula;

@Repository
public interface AulaRepository extends JpaRepository<Aula, Integer>{

	@Query("SELECT a FROM Aula a JOIN a.turma t JOIN t.curso c")
	List<Aula> consultaAulaETurmaECurso();

}
