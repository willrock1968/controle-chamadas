package com.willian.backendcontrolechamada.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Aluno {
	
	@Id
	@GeneratedValue
	private int idaluno;
	
		
	private String nome_aluno;
	private String ra;
	
	public int getIdaluno() {
		return idaluno;
	}
	
	public void setIdaluno(int idaluno) {
		this.idaluno = idaluno;
	}
	
	
	public String getNome_aluno() {
		return nome_aluno;
	}
	
	public void setNome_aluno(String nome_aluno) {
		this.nome_aluno = nome_aluno;
	}
	
	public String getRa() {
		return ra;
	}
	
	public void setRa(String ra) {
		this.ra = ra;
	}
	
}
