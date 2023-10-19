import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AulaComponent } from './aula.component';
import { FormAulaComponent } from './form-aula/form-aula.component';

const routes: Routes = [
  {
    path: '',
    component: AulaComponent,    
  },
  {
    path: 'form-aula',
    component: FormAulaComponent,    
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaRoutingModule { }
