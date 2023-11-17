package com.willian.backendcontrolechamada.entity;

import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Chamada {
	
	@Id
	@GeneratedValue
	private int idchamada;
	
	@OneToOne
	@JoinColumn(name = "idaula", referencedColumnName = "idaula")
	private Aula aula;
	
	private Time horario_chamada;

	public Aula getAula() {
		return aula;
	}

	public void setAula(Aula aula) {
		this.aula = aula;
	}

	public Time getHorario_chamada() {
		return horario_chamada;
	}

	public void setHorario_chamada(Time horario_chamada) {
		this.horario_chamada = horario_chamada;
	}
	
	
}
