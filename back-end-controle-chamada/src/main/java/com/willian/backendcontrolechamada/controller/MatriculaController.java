package com.willian.backendcontrolechamada.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.willian.backendcontrolechamada.dto.MatriculaDTO;
import com.willian.backendcontrolechamada.entity.Matricula;
import com.willian.backendcontrolechamada.service.AlunoService;
import com.willian.backendcontrolechamada.service.MatriculaService;
import com.willian.backendcontrolechamada.service.TurmaService;

@RestController
@RequestMapping("/api")
public class MatriculaController {
	
	@Autowired
	private MatriculaService matriculaService;
	
	@Autowired
	private AlunoService alunoService;
	
	@Autowired
	private TurmaService turmaService;
	
		
	@PostMapping("/matriculaAluno")
	public ResponseEntity<?> matriculaAluno(@RequestBody MatriculaDTO matriculaDTO) {
	    
		try {
			Matricula matricula = new Matricula();
			
		    // Defina os atributos de matricula com base em matriculaDTO
		    matricula.setAluno(alunoService.getAlunoById(matriculaDTO.getIdaluno()));
		    matricula.setTurma(turmaService.getTurmaByIdy(matriculaDTO.getIdturma()));
		   
		    LocalDate dataAtual = LocalDate.now();
		    matricula.setData_matricula(dataAtual);
		    matricula.setAtivo(true);
		    
		    matriculaService.matriculaAluno(matricula);
		    return ResponseEntity.ok("Matrícula realizada com sucesso");
	    
		} catch (Exception e) {
            // Trate a exceção, registre-a ou envie uma resposta de erro adequada ao cliente
            e.printStackTrace(); // Exemplo: imprima a exceção para registro

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao realizar a matrícula");
        }
	}
	
	@GetMapping("/getMatricula")
	public List<Matricula> getMatricula()
	{
		return matriculaService.getMatricula();
	}

}
