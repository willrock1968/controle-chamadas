import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaComponent } from '../turma/turma.component';
import { NivelCursoComponent } from '../nivel-curso/nivel-curso.component';
import { CursoComponent } from '../curso/curso.component';
import { AlunoComponent } from '../aluno/aluno.component';
import { AulaComponent } from '../aula/aula.component';

const routes: Routes = [
  {
    path: 'nivel-curso',
    component: NivelCursoComponent    
  },
  {
    path: 'curso',
    component: CursoComponent    
  },
  {
    path: 'turma',
    component: TurmaComponent    
  },
  {
    path: 'aluno',
    component: AlunoComponent    
  },
  {
    path: 'aula',
    component: AulaComponent    
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
