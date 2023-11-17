import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChamadaService } from '../chamada.service';

@Component({
  selector: 'app-form-chamada',
  templateUrl: './form-chamada.component.html',
  styleUrls: ['./form-chamada.component.css']
})
export class FormChamadaComponent implements OnInit {

  public listAlunosMatriculadosAulaTurma: any;

  constructor(
    private route: ActivatedRoute,
    private chamadaService: ChamadaService,     
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {     
      const idaula = params['idaula'];   

      this.selecionaAlunosMatriculadosAulaTurma(idaula);
    }); 
  }

  selecionaAlunosMatriculadosAulaTurma(idaula: any)
  {
    this.chamadaService.selecionaAlunosMatriculadosAulaTurma(idaula)
    .subscribe({
      next:(res)=>{
       this.listAlunosMatriculadosAulaTurma = res; 
       console.log(this.listAlunosMatriculadosAulaTurma);      
      },
      error:(error)=>{
       console.log(error.message);       
      }
    }) 
  }

}
