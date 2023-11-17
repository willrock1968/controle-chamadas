import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadaComponent } from './chamada.component';
import { FormChamadaComponent } from './form-chamada/form-chamada.component';

const routes: Routes = [
  {
    path: '',
    component: ChamadaComponent,    
  },
  {
    path: 'chamada/form-chamada/:idaula',
    component: FormChamadaComponent,
  },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadaRoutingModule { }
