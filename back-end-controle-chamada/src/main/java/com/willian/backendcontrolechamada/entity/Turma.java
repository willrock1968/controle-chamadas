package com.willian.backendcontrolechamada.entity;

import java.time.LocalTime;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;

@Entity
public class Turma {
	
	@Id
	@GeneratedValue
	private int idturma;
	
	@ManyToOne
	@JoinColumn(name = "idcurso", referencedColumnName = "idcurso")
	private Curso curso;
	
	@Transient
	private int idCurso;
	private String codigo;
	private String nome_turma;
	private String dias_semana;
	private LocalTime horario_aulas;
	private int qtde_alunos_ativos;
	
	@OneToMany(mappedBy = "turma")
	private List<Matricula> matricula;
	
	
	public List<Matricula> getMatricula() {
		return matricula;
	}

	public void setMatricula(List<Matricula> matricula) {
		this.matricula = matricula;
	}

	public int getIdturma() {
		return idturma;
	}
	
	public void setIdturma(int idturma) {
		this.idturma = idturma;
	}
	
	public Curso getCurso() {
		return curso;
	}
	
	public void setCurso(Curso curso) {
		this.curso = curso;
	}
	
	public String getCodigo() {
		return codigo;
	}
	
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	
	public String getNome_turma() {
		return nome_turma;
	}
	
	public void setNome_turma(String nome_turma) {
		this.nome_turma = nome_turma;
	}
	
	public String getDias_semana() {
		return dias_semana;
	}
	
	public void setDias_semana(String dias_semana) {
		this.dias_semana = dias_semana;
	}
	
	public LocalTime getHorario_aulas() {
		return horario_aulas;
	}
	
	public void setHorario_aulas(LocalTime horario_aulas) {
		this.horario_aulas = horario_aulas;
	}
	
	public int getQtde_alunos_ativos() {
		return qtde_alunos_ativos;
	}
	
	public void setQtde_alunos_ativos(int qtde_alunos_ativos) {
		this.qtde_alunos_ativos = qtde_alunos_ativos;
	}
	
	public int getIdCurso() {
		return idCurso;
	}

	public void setIdCurso(int idCurso) {
		this.idCurso = idCurso;
	}
}
