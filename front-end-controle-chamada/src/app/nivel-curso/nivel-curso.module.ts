import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NivelCursoComponent } from './nivel-curso.component';
import { FormNivelCursoComponent } from './form-nivel-curso/form-nivel-curso.component';
import { NivelCursoRoutingModule } from './nivel-curso-routing.module';
import { HeaderModule } from '../header/header.module';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [NivelCursoComponent, FormNivelCursoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NivelCursoRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [    
    FormBuilder      
  ],
})
export class NivelCursoModule { }
