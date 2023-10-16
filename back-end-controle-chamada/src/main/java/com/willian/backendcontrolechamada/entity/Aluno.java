package com.willian.backendcontrolechamada.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Aluno {
	
	@Id
	@GeneratedValue
	private int idaluno;
	
	@OneToMany(mappedBy = "aluno")
	private List<Matricula> matricula;
	
	private String nome_aluno;
	private String ra;
	
	public int getIdaluno() {
		return idaluno;
	}
	public void setIdaluno(int idaluno) {
		this.idaluno = idaluno;
	}
	
	public List<Matricula> getMatricula() {
		return matricula;
	}
	
	public void setMatricula(List<Matricula> matricula) {
		this.matricula = matricula;
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
