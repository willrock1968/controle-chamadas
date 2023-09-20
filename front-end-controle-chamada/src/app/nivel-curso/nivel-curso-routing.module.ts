import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelCursoComponent } from './nivel-curso.component';

const routes: Routes = [
  {
    path: '',
    component: NivelCursoComponent,    
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelCursoRoutingModule { }
