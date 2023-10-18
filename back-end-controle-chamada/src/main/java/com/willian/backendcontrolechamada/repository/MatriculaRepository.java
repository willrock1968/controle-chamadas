package com.willian.backendcontrolechamada.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.willian.backendcontrolechamada.entity.Matricula;

@Repository
public interface MatriculaRepository extends JpaRepository<Matricula, Integer>{

}
