import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { TurmaService } from './turma.service';
import { FormTurmaComponent } from './form-turma/form-turma.component';
import { TurmaComponent } from './turma.component';
import { TurmaRoutingModule } from './turma-routing.module';

@NgModule({
  declarations: [TurmaComponent, FormTurmaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    ModalModule.forRoot(),   
    TurmaRoutingModule
  ],
  providers: [
    TurmaService,
    FormBuilder      
  ],
})
export class TurmaModule { }
