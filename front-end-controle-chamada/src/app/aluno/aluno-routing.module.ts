import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { MatriculaAlunoComponent } from './matricula-aluno/matricula-aluno.component';

const routes: Routes = [
  {
    path: '',
    component: AlunoComponent,    
  },
  {
    path: 'form-aluno',
    component: FormAlunoComponent,    
  },
  {
    path: 'matricula-aluno/:idaluno',
    component: MatriculaAlunoComponent,    
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
