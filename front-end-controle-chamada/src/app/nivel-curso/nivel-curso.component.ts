import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivel-curso',
  templateUrl: './nivel-curso.component.html',
  styleUrls: ['./nivel-curso.component.css']
})
export class NivelCursoComponent implements OnInit {

  f: FormGroup = new FormGroup({});
  public login: any;
  
  constructor(
    private formBuilder: FormBuilder,   
    private router: Router,    
  ) { }

  ngOnInit(): void 
  {
    this.f = this.formBuilder.group({      
      tipo: [null, [Validators.required, Validators.minLength(4)]]            
    });   
  }  

  onSubmit()
  {

  }  

}
