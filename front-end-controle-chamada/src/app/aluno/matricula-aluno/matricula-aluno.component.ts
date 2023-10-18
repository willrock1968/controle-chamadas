import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { TurmaService } from 'src/app/turma/turma.service';
import { MatriculaAlunoService } from './matricula-aluno.service';

@Component({
  selector: 'app-matricula-aluno',
  templateUrl: './matricula-aluno.component.html',
  styleUrls: ['./matricula-aluno.component.css']
})
export class MatriculaAlunoComponent implements OnInit {

  public aluno: any;  
  public listTurma: any;
  public listMatricula: any;
 
  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService, 
    private turmaService: TurmaService,
    private matriculaAlunoService: MatriculaAlunoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idaluno = params['idaluno'];

      this.getAlunoById(idaluno); 
      this.getTurma();
      this.getMatricula();
     
    });
  }
    
  getAlunoById(idaluno: any)
  {
    this.alunoService.getAlunoById(idaluno)
    .subscribe({
      next:(res)=>{       
        this.aluno = res;        
        const alunoJson = JSON.stringify(this.aluno);        
        localStorage.setItem('aluno', alunoJson);       
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

  matriculaAluno(idturma: any)
  {    
    const objetoJSONString = localStorage.getItem('aluno');
    
    if (objetoJSONString) 
    {
      const alunoJson = JSON.parse(objetoJSONString);
      alunoJson.idturma = idturma; 
      
      this.matriculaAlunoService.matriculaAluno(alunoJson)
     .subscribe({
       next:(res)=>{     
        console.log(res);   
        this.router.navigate(['aluno']);        
       },
       error:(error)=>{
        console.log(error.message);       
       }
      })  
    } 
    else 
    {
      console.log('Chave "meuObjeto" não encontrada no localStorage.');
    }    
  } 


  getMatricula()
  {
    this.matriculaAlunoService.getMatricula()
    .subscribe({
      next:(res)=>{
       this.listMatricula = res; 
       console.log(this.listMatricula);      
      },
      error:(error)=>{
       console.log(error.message);       
      }
    })   
  }
}
