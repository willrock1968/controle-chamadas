import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma/turma.service';
import { NavigationExtras, Router } from '@angular/router';
import { AulaService } from './aula.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  public listAula: any;
      
  constructor(       
    private router: Router,
    private turmaService: TurmaService,
    private aulaService: AulaService   
  ) { }

  ngOnInit(): void 
  {
    this.getAula();    
  }  

  onSubmit()
  {

  } 

  getAula()
  {
    this.aulaService.getAula()
    .subscribe({
      next:(res)=>{       
       this.listAula = res;             
      },
      error:(error)=>{
       console.log(error.message);       
      }
    })
   
  }
 
  
  newAula()
  {
    this.router.navigate(['aula/form-aula']);
  }

  uptadeAula(id: any)
  {
      
  } 
  
  openRealizarChamadaAula(idaula: any)
  {
    // Criar um objeto NavigationExtras para passar parâmetros
    const navigationExtras: NavigationExtras = 
    {
      state: {
        idaula: idaula
      }
    };
    // Navegar para o componente desejado com os parâmetros
    this.router.navigate(['chamada/form-chamada', idaula], navigationExtras);  
  }

}
