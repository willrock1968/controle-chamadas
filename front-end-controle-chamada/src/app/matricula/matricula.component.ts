import { Component, OnInit } from '@angular/core';
import { MatriculaService } from './matricula.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css'],
})
export class MatriculaComponent implements OnInit {

  public listMatriculas: any;
  public mostraTurma: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private matriculaService: MatriculaService,     
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMatriculas();    
  }

  getMatriculas()
  {
    this.matriculaService.getMatriculas()
    .subscribe({
      next:(res)=>{
       this.listMatriculas = res; 
       console.log(this.listMatriculas);      
      },
      error:(error)=>{
       console.log(error.message);       
      }
    })   
  }

  mostrarDetalhesTurmas() {
    this.mostraTurma = !this.mostraTurma;
  } 

}
