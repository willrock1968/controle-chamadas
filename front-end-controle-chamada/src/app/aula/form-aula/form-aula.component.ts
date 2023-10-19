import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaService } from 'src/app/turma/turma.service';
import { AulaService } from '../aula.service';

@Component({
  selector: 'app-form-aula',
  templateUrl: './form-aula.component.html',
  styleUrls: ['./form-aula.component.css']
})
export class FormAulaComponent implements OnInit {

  public listTurma: any;
  
  constructor(
    private router: Router,
    private turmaService: TurmaService,
    private aulaService: AulaService  
  ) { }

  ngOnInit(): void {
    this.getTurma();
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
