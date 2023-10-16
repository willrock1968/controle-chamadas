package com.willian.backendcontrolechamada.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.willian.backendcontrolechamada.entity.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Integer>{

}
