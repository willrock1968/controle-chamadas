package entity;


import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class NivelCurso implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private int idnivel_curso;
	
	private String tipo;
	
	@OneToMany
	private List<Curso> cursos;

	public int getIdnivel_curso() {
		return idnivel_curso;
	}

	public void setIdnivel_curso(int idnivel_curso) {
		this.idnivel_curso = idnivel_curso;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public List<Curso> getCursos() {
		return cursos;
	}

	public void setCursos(List<Curso> cursos) {
		this.cursos = cursos;
	}
		
}
