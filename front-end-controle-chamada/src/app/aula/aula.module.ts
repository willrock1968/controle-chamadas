import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulaComponent } from './aula.component';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { AulaRoutingModule } from './aula-routing.module';
import { AulaService } from './aula.service';
import { FormAulaComponent } from './form-aula/form-aula.component';


@NgModule({
  declarations: [AulaComponent, FormAulaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    ModalModule.forRoot(),   
    AulaRoutingModule
  ],
  providers: [
    AulaService,
    FormBuilder      
  ],
})
export class AulaModule { }
