package com.willian.backendcontrolechamada.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.willian.backendcontrolechamada.entity.Aula;
import com.willian.backendcontrolechamada.entity.Chamada;

@Repository
public interface ChamadaRepository extends JpaRepository<Chamada, Integer>{

	@Query("SELECT t, a, m, au FROM Turma t "
            + "JOIN Matricula m ON t.idturma = m.turma.idturma "
            + "JOIN Aluno a ON m.aluno.idaluno = a.idaluno "
            + "JOIN Aula au ON t.idturma = au.turma.idturma "
            + "WHERE au.idaula = :aulaId")
    List<Object[]> selecionaAlunosMatriculadosAulaTurma(@Param("aulaId") Integer aulaId);
}
