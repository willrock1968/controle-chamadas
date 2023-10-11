import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TurmaService } from '../turma.service';
import { CursoService } from 'src/app/curso/curso.service';

@Component({
  selector: 'app-form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.css']
})
export class FormTurmaComponent implements OnInit {

  public listCurso: any;
  public listTurma: any;
  f: FormGroup = new FormGroup({});  
  
  constructor(
    private formBuilder: FormBuilder,   
    private router: Router, 
    private cursoService: CursoService,
    private turmaService: TurmaService    
  ) { }

  ngOnInit(): void 
  {    
    this.f = this.formBuilder.group({
      idCurso: [null, [Validators.required, Validators.minLength(4)]], // Campo de nível de curso
      codigo: [null, [Validators.required, Validators.minLength(4)]],
      nome_turma: [null, [Validators.required, Validators.minLength(4)]],
      dias_semana: [null, [Validators.required, Validators.minLength(4)]],
      horario_aulas: [null, [Validators.required, Validators.minLength(4)]],
      qtde_alunos_ativos: [null, [Validators.required, Validators.minLength(2)]],
    });  
    
    this.getCurso();
  }  

  saveTurma()
  {      
    this.turmaService.saveTurma(this.f.value)
     .subscribe({
       next:(res)=>{        
        this.router.navigate(['turma']);        
       },
       error:(error)=>{
        console.log(error.message);       
       }
     })   
  } 

  getCurso()
  {
    this.cursoService.getCurso()
    .subscribe({
      next:(res)=>{       
       this.listCurso = res; 
      },
      error:(error)=>{
       console.log(error.message);       
      }
    })
   
  }    

}
