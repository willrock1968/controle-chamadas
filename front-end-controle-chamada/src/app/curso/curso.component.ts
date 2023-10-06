import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from './curso.service';
import { NivelCursoService } from '../nivel-curso/nivel-curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  public listNivelCurso: any;
  public listCurso: any;
    
  constructor(       
    private router: Router,
    private cursoService: CursoService,
    private nivelCursoService: NivelCursoService   
  ) { }

  ngOnInit(): void 
  {
    this.getNivelCurso();
    this.getCurso();
  }  

  onSubmit()
  {

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
 
  getCurso()
  {
    this.cursoService.getCurso()
    .subscribe({
      next:(res)=>{
       
       this.listCurso = res;
       console.log(this.listNivelCurso);
       
      },
      error:(error)=>{
       console.log(error.message);
       //this.modalService.showModal(error.error.message); 
      }
    })   
  }

  newCurso()
  {
    this.router.navigate(['curso/form-curso']);
  }

  uptadeCurso(id: any)
  {
      
  }  
}
