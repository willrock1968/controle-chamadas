import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { ModalService } from './../../modal/modal.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  f: FormGroup = new FormGroup({});
  public login: any;

  constructor(
    private formBuilder: FormBuilder,   
    private router: Router,  
    private authService: AuthService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void 
  {
    this.f = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
            
    });   
  }  
  
  onSubmit()
  {   
    this.authService.login(this.f.value)
     .subscribe({
       next:(res)=>{
        this.login = res;
        //localStorage.setItem('token', this.login.token);
        //localStorage.setItem('id', btoa(this.login.user.iduser));              
        this.router.navigate(['/dashboard']);
       },
       error:(error)=>{
        console.log(error);
        this.modalService.showModal(error.error.error); 
       }
     })
    
    /*
    essa chamada mostra o subscribe depreciado, enquanto 
    a chamada acima sugerida pelo professor não (estudar o motivo)
    this.authService.login(this.f.value).subscribe(
    res => 
    {        
      
    }, 
    error => 
    {
        console.log(error); 
    });*/
  }
}
