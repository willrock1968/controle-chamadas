import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { MatriculaService } from './matricula.service';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaComponent } from './matricula.component';
import { BrDateFormatPipe } from '../pipes/date-format.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MatriculaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    ModalModule.forRoot(),
    MatriculaRoutingModule
  ],
  providers: [
    MatriculaService,
    FormBuilder      
  ],   
})
export class MatriculaModule { }
