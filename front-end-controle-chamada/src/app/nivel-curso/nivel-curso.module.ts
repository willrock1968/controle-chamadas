import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NivelCursoComponent } from './nivel-curso.component';
import { NivelCursoRoutingModule } from './nivel-curso-routing.module';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NivelCursoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NivelCursoRoutingModule
  ],
  providers: [    
    FormBuilder      
  ],
})
export class NivelCursoModule { }
