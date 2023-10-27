package com.willian.backendcontrolechamada.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;

@Entity
public class Aula {
	
	@Id
	@GeneratedValue
	private int idaula;
	
	@ManyToOne
	@JoinColumn(name = "idturma", referencedColumnName = "idturma")
	private Turma turma;
	
	@Transient
	private int idTurma;	
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate data_aula;	
	private String conteudo;
	
	public int getIdTurma() {
		return idTurma;
	}

	public void setIdTurma(int idTurma) {
		this.idTurma = idTurma;
	}

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
