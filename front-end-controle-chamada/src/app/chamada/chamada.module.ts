import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadaRoutingModule } from './chamada-routing.module';
import { ChamadaComponent } from './chamada.component';
import { FormChamadaComponent } from './form-chamada/form-chamada.component';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ChamadaService } from './chamada.service';

@NgModule({
  declarations: [ChamadaComponent, FormChamadaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    ModalModule.forRoot(),
    ChamadaRoutingModule
  ],
  providers: [
    ChamadaService,
    FormBuilder      
  ],
})
export class ChamadaModule { }
