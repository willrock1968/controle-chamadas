import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './login/auth/auth.component';
export const routes: Routes = 
[
  {
    path: '',
    component: AuthComponent,
    pathMatch: 'full',
  },  
  {
    path: 'nivel-curso',
    loadChildren: () => import('./nivel-curso/nivel-curso.module').then(m => m.NivelCursoModule)        
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
