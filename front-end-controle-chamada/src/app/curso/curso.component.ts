import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  f: FormGroup = new FormGroup({});
  public login: any;
  
  constructor(
    private formBuilder: FormBuilder,   
    private router: Router,    
  ) { }

  ngOnInit(): void 
  {
    this.f = this.formBuilder.group({      
      nome_curso: [null, [Validators.required, Validators.minLength(4)]],
      carga_horaria: [null, [Validators.required, Validators.minLength(2)]],
      porcentagem_tolerancia_falta: [null, [Validators.required, Validators.minLength(2)]]            
    });   
  }  

  onSubmit()
  {

  } 
}
