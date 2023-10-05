import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NivelCursoService } from '../nivel-curso.service';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-form-nivel-curso',
  templateUrl: './form-nivel-curso.component.html',
  styleUrls: ['./form-nivel-curso.component.css']
})
export class FormNivelCursoComponent implements OnInit {

  f: FormGroup = new FormGroup({});
  public login: any;
  
  constructor(
    private formBuilder: FormBuilder,   
    private router: Router, 
    private nivelCursoService : NivelCursoService,
    private modalService: ModalService   
  ) { }

  ngOnInit(): void 
  {
    this.f = this.formBuilder.group({      
      tipo: [null, [Validators.required, Validators.minLength(4)]]            
    });   
  }  

  saveNivelCurso()
  {
    this.nivelCursoService.saveNivelCurso(this.f.value)
     .subscribe({
       next:(res)=>{
        
        this.router.navigate(['nivel-curso']);
        
       },
       error:(error)=>{
        console.log(error.message);
        //this.modalService.showModal(error.error.message); 
       }
     })
  }  

}
