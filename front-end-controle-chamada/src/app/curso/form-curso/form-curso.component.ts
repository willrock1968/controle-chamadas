import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from '../curso.service';
import { NivelCursoService } from '../../nivel-curso/nivel-curso.service';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {

  public listNivelCurso: any;
  f: FormGroup = new FormGroup({});
  public login: any;
  
  constructor(
    private formBuilder: FormBuilder,   
    private router: Router, 
    private cursoService: CursoService,
    private nivelCursoService: NivelCursoService    
  ) { }

  ngOnInit(): void 
  {
    this.f = this.formBuilder.group({
      nivelCurso: [null, [Validators.required, Validators.minLength(4)]],      
      nome_curso: [null, [Validators.required, Validators.minLength(4)]],
      carga_horaria: [null, [Validators.required, Validators.minLength(2)]],
      porcentagem_tolerancia_falta: [null, [Validators.required, Validators.minLength(2)]]            
    });  
    
    this.getNivelCurso();
  }  

  saveCurso()
  {    
    this.cursoService.saveCurso(this.f.value)
     .subscribe({
       next:(res)=>{
        
        this.router.navigate(['curso']);
        
       },
       error:(error)=>{
        console.log(error.message);
        //this.modalService.showModal(error.error.message); 
       }
     })
   
  } 

  getNivelCurso()
  {
    this.nivelCursoService.getNivelCurso()
    .subscribe({
      next:(res)=>{
       
       this.listNivelCurso = res;
       console.log(this.listNivelCurso);
       
      },
      error:(error)=>{
       console.log(error.message);
       //this.modalService.showModal(error.error.message); 
      }
    })
   
  }    

}
