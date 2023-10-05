import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelCursoComponent } from './nivel-curso.component';
import { FormNivelCursoComponent } from './form-nivel-curso/form-nivel-curso.component';

const routes: Routes = [
  {
    path: '',
    component: NivelCursoComponent,    
  },  
  {
    path: 'form-nivel-curso',
    component: FormNivelCursoComponent,    
  }

];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelCursoRoutingModule { }
