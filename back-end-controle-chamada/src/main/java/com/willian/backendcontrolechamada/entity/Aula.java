package com.willian.backendcontrolechamada.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Aula {
	
	@Id
	@GeneratedValue
	private int idaula;
	
	@ManyToOne
	@JoinColumn(name = "idturma", referencedColumnName = "idturma")
	private Turma turma;
	
	private LocalDate data_aula;
	
	private String conteudo;

	public int getIdaula() {
		return idaula;
	}

	public void setIdaula(int idaula) {
		this.idaula = idaula;
	}

	public Turma getTurma() {
		return turma;
	}

	public void setTurma(Turma turma) {
		this.turma = turma;
	}

	public LocalDate getData_aula() {
		return data_aula;
	}

	public void setData_aula(LocalDate data_aula) {
		this.data_aula = data_aula;
	}

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}
	
	
}
