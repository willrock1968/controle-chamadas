import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaComponent } from './turma.component';
import { FormTurmaComponent } from './form-turma/form-turma.component';

const routes: Routes = [
  {
    path: '',
    component: TurmaComponent,    
  },
  {
    path: 'form-turma',
    component: FormTurmaComponent,    
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class TurmaRoutingModule { }
