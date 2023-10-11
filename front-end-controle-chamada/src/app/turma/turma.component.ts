import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../curso/curso.service';
import { TurmaService } from './turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  public listTurma: any;
  public listCurso: any;
    
  constructor(       
    private router: Router,
    private turmaService: TurmaService,
    private cursoService: CursoService   
  ) { }

  ngOnInit(): void 
  {
    this.getCurso();
    this.getTurma();
  }  

  onSubmit()
  {

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
 
  getTurma()
  {
    this.turmaService.getTurma()
    .subscribe({
      next:(res)=>{       
      
       this.listCurso = res;
       console.log(this.listTurma);       
      },
      error:(error)=>{
       console.log(error.message);       
      }
    })   
  }

  newTurma()
  {
    this.router.navigate(['turma/form-turma']);
  }

  uptadeTurma(id: any)
  {
      
  }  

}
