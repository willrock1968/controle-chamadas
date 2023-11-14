import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { TurmaService } from 'src/app/turma/turma.service';
import { MatricularAlunoService } from './matricular-aluno.service';

@Component({
  selector: 'app-matricular-aluno',
  templateUrl: './matricular-aluno.component.html',
  styleUrls: ['./matricular-aluno.component.css']
})
export class MatricularAlunoComponent implements OnInit {

  public aluno: any;  
  public listTurma: any;
  public listMatricula: any;
 
  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService, 
    private turmaService: TurmaService,
    private matricularAlunoService: MatricularAlunoService,
    private router: Router
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

  matricularAluno(idturma: any)
  {    
    const objetoJSONString = localStorage.getItem('aluno');
    
    if (objetoJSONString) 
    {
      const alunoJson = JSON.parse(objetoJSONString);
      alunoJson.idturma = idturma; 
      
      this.matricularAlunoService.matricularAluno(alunoJson)
     .subscribe({
       next:(res)=>{     
        alert("Aluno Matriculado")  
        this.router.navigate(['matricula']);        
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
}
