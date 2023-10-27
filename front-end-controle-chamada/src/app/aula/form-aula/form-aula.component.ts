import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  f: FormGroup = new FormGroup({}); 
  public dataPadrao = /^(\d{2})\/(\d{2})\/(\d{4})$/; 
  
  constructor(
    private formBuilder: FormBuilder,   
    private router: Router, 
    private turmaService: TurmaService,
    private aulaService: AulaService  
  ) { }

  ngOnInit(): void {

    this.f = this.formBuilder.group({
      idTurma: [null, [Validators.required, Validators.minLength(4)]], 
      data_aula: [null, [Validators.required, Validators.minLength(10), Validators.pattern(this.dataPadrao)]],      
      conteudo: [null, [Validators.required, Validators.minLength(10)]],
     
    });  

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

  saveAula()
  {          
    this.aulaService.saveAula(this.f.value)
     .subscribe({
       next:(res)=>{  
          
        localStorage.setItem("ultima-aula-cadastrada", JSON.stringify(res));
        this.router.navigate(['aula']);        
       },
       error:(error)=>{
        console.log(error.message);       
       }
     }) 
  } 

}
