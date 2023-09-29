package com.willian.backendcontrolechamada.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.willian.backendcontrolechamada.entity.NivelCurso;

@Repository
public interface NivelCursoRepository extends JpaRepository<NivelCurso, Integer>{

}
