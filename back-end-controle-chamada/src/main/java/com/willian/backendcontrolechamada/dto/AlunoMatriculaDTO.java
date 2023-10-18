package com.willian.backendcontrolechamada.dto;

import com.willian.backendcontrolechamada.entity.Aluno;
import com.willian.backendcontrolechamada.entity.Matricula;

public class AlunoMatriculaDTO {
	
	public AlunoMatriculaDTO(Aluno aluno, Matricula matricula) {
	    this.aluno = aluno;
	    this.matricula = matricula;
	}

	
    private Aluno aluno;
    private Matricula matricula;
    
	public Aluno getAluno() {
		return aluno;
	}
	
	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}
	
	public Matricula getMatricula() {
		return matricula;
	}
	
	public void setMatricula(Matricula matricula) {
		this.matricula = matricula;
	}
    
}
