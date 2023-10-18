package com.willian.backendcontrolechamada.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Matricula {

	@Id
	@GeneratedValue
	private int idmatricula;
	
	@ManyToOne
	@JoinColumn(name = "idaluno")
	private Aluno aluno;
		
	@ManyToOne
	@JoinColumn(name = "idturma")
	private Turma turma;
	
	private LocalDate data_matricula;
	private boolean ativo;
	
	public int getIdmatricula() {
		return idmatricula;
	}
	
	public void setIdmatricula(int idmatricula) {
		this.idmatricula = idmatricula;
	}
	
	public Aluno getAluno() {
		return aluno;
	}
	
	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}
	
	public Turma getTurma() {
		return turma;
	}
	
	public void setTurma(Turma turma) {
		this.turma = turma;
	}
	
	public LocalDate getData_matricula() {
		return data_matricula;
	}
	
	public void setData_matricula(LocalDate data_matricula) {
		this.data_matricula = data_matricula;
	}
	public boolean isAtivo() {
		return ativo;
	}
	
	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}
		
}
