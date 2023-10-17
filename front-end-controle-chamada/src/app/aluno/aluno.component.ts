import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public listAluno: any;  
    
  constructor(       
    private router: Router,
    private alunoService: AlunoService  
  ) { }

  ngOnInit(): void 
  {
    this.getAluno();    
  }    

  getAluno()
  {
    this.alunoService.getAluno()
    .subscribe({
      next:(res)=>{       
       this.listAluno = res; 
      },
      error:(error)=>{
       console.log(error.message);       
      }
    })   
  }

  newAluno()
  {
    this.router.navigate(['aluno/form-aluno']);
  }

  uptadeAluno(id: any)
  {
      
  }  

  matriculaAluno(idaluno: any)
  {
    this.router.navigate(['matricula-aluno', idaluno]);    
  }

}
