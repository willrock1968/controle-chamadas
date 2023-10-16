import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent implements OnInit {

  f: FormGroup = new FormGroup({});  
  
  constructor(
    private formBuilder: FormBuilder,   
    private router: Router, 
    private alunoService: AlunoService   
  ) { }

  ngOnInit(): void 
  {    
    this.f = this.formBuilder.group({     
      ra: [null, [Validators.required, Validators.minLength(4)]],
      nome_aluno: [null, [Validators.required, Validators.minLength(4)]]
    });
  }  

  saveAluno()
  {      
    this.alunoService.saveAluno(this.f.value)
     .subscribe({
       next:(res)=>{        
        this.router.navigate(['aluno']);        
       },
       error:(error)=>{
        console.log(error.message);       
       }
     })   
  } 

}
