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
  public turmaChamada: any;
  public cursoChamada: any;  
  public aulaConteudoChamada: any;
  public aulaDataChamada: any;

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
        this.turmaChamada = this.listAlunosMatriculadosAulaTurma[0][0].nome_turma;       
        this.cursoChamada = this.listAlunosMatriculadosAulaTurma[0][0].curso.nome_curso;
        this.aulaConteudoChamada = this.listAlunosMatriculadosAulaTurma[0][3].conteudo;
        this.aulaDataChamada = this.listAlunosMatriculadosAulaTurma[0][3].data_aula;
      },
      error:(error)=>{
       console.log(error.message);       
      }
    }) 
  }

}
