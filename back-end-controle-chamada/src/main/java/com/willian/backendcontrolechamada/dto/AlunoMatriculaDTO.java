package com.willian.backendcontrolechamada.dto;

import java.util.ArrayList;
import java.util.List;

import com.willian.backendcontrolechamada.entity.Aluno;
import com.willian.backendcontrolechamada.entity.Matricula;

public class AlunoMatriculaDTO {
	
    private Aluno aluno;
    private List<Matricula> matriculas;
    

    public AlunoMatriculaDTO(Aluno aluno) {
        this.aluno = aluno;
        this.matriculas = new ArrayList<>();
    }

    public void addMatricula(Matricula matricula) {
        this.matriculas.add(matricula);
    }

	public Aluno getAluno() {
		return aluno;
	}

	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}

	public List<Matricula> getMatriculas() {
		return matriculas;
	}

	public void setMatriculas(List<Matricula> matriculas) {
		this.matriculas = matriculas;
	}
    
    
}
