package com.willian.backendcontrolechamada.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.willian.backendcontrolechamada.entity.Aula;

@Repository
public interface AulaRepository extends JpaRepository<Aula, Integer>{

}
