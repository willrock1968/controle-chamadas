package com.willian.backendcontrolechamada.dto;


public class MatriculaDTO {
	
	private int idaluno;
    private int idturma;
    private String nome_aluno;
    private String ra;
    
	public int getIdaluno() {
		return idaluno;
	}
	
	public void setIdaluno(int idaluno) {
		this.idaluno = idaluno;
	}
	
	public int getIdturma() {
		return idturma;
	}
	
	public void setIdturma(int idturma) {
		this.idturma = idturma;
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
