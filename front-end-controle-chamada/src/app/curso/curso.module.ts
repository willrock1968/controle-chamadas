import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CursoRoutingModule } from './curso-routing.module';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { CursoService } from './curso.service';
import { CursoComponent } from './curso.component';
import { FormCursoComponent } from './form-curso/form-curso.component';

@NgModule({
  declarations: [CursoComponent, FormCursoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    ModalModule.forRoot(),   
    CursoRoutingModule
  ],
  providers: [
    CursoService,
    FormBuilder      
  ],
})
export class CursoModule { }
