import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaComponent } from '../turma/turma.component';

const routes: Routes = [
  {
    path: 'turma',
    component: TurmaComponent    
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
