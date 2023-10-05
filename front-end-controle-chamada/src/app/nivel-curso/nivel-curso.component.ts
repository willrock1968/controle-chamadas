import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NivelCursoService } from './nivel-curso.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-nivel-curso',
  templateUrl: './nivel-curso.component.html',
  styleUrls: ['./nivel-curso.component.css']
})
export class NivelCursoComponent implements OnInit {

  public listNivelCurso: any;

  constructor(
    private router: Router,
    private nivelCursoService: NivelCursoService
    ) { }

  ngOnInit(): void {  
    this.getNivelCurso();
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

  newNivelCurso()
  {
    this.router.navigate(['nivel-curso/form-nivel-curso']);
  }

  uptadeNivelCurso(id: any)
  {
      
  }  
  
}
