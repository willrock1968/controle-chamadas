package com.willian.backendcontrolechamada.entity;

import java.util.Optional;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Curso {
	
	@Id
	@GeneratedValue
	private int idcurso;
	
	private int idNivel;
	private String nome_curso;
	private String carga_horaria;
	private String porcentagem_tolerancia_falta;
		
	@ManyToOne
    @JoinColumn(name = "idnivel_curso", referencedColumnName = "idnivel_curso")
    private NivelCurso nivelCurso; 

    public NivelCurso getNivelCurso() {
        return nivelCurso;
    }

    public void setNivelCurso(NivelCurso nivelCurso) {
        this.nivelCurso = nivelCurso;
    }
	
	public int getIdcurso() {
		return idcurso;
	}

	public void setIdcurso(int idcurso) {
		this.idcurso = idcurso;
	}

	public String getNome_curso() {
		return nome_curso;
	}

	public void setNome_curso(String nome_curso) {
		this.nome_curso = nome_curso;
	}

	public String getCarga_horaria() {
		return carga_horaria;
	}

	public void setCarga_horaria(String carga_horaria) {
		this.carga_horaria = carga_horaria;
	}

	public String getPorcentagem_tolerancia_falta() {
		return porcentagem_tolerancia_falta;
	}

	public void setPorcentagem_tolerancia_falta(String porcentagem_tolerancia_falta) {
		this.porcentagem_tolerancia_falta = porcentagem_tolerancia_falta;
	}

	public int getIdNivel() {
		return idNivel;
	}

	public void setIdNivel(int idNivel) {
		this.idNivel = idNivel;
	}

		
		
}
