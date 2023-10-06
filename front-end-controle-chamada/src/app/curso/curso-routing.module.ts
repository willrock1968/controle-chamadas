import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso.component';
import { FormCursoComponent } from './form-curso/form-curso.component';

const routes: Routes = [
  {
    path: '',
    component: CursoComponent,    
  },
  {
    path: 'form-curso',
    component: FormCursoComponent,    
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
