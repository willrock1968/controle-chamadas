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
  },  
  {
    path: 'curso',
    loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule)        
  },  
  {
    path: 'turma',
    loadChildren: () => import('./turma/turma.module').then(m => m.TurmaModule)        
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
