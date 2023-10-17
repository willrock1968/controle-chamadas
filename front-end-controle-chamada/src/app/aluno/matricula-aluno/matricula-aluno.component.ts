import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { TurmaService } from 'src/app/turma/turma.service';

@Component({
  selector: 'app-matricula-aluno',
  templateUrl: './matricula-aluno.component.html',
  styleUrls: ['./matricula-aluno.component.css']
})
export class MatriculaAlunoComponent implements OnInit {

  public aluno: any;  
  public listTurma: any;
 
  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService, 
    private turmaService: TurmaService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idaluno = params['idaluno'];

      this.getAlunoById(idaluno); 
      this.getTurma();
     
    });
  }
    
  getAlunoById(idaluno: any)
  {
    this.alunoService.getAlunoById(idaluno)
    .subscribe({
      next:(res)=>{       
       this.aluno = res; 
       
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
       this.listTurma = res;       
      },
      error:(error)=>{
       console.log(error.message);       
      }
    })   
  }
 
}
