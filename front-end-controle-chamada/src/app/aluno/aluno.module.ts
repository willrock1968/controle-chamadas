import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

import { AlunoComponent } from './aluno.component';
import { AlunoService } from './aluno.service';
import { AlunoRoutingModule } from './aluno-routing.module';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { MatriculaAlunoComponent } from './matricula-aluno/matricula-aluno.component';

@NgModule({
  declarations: [AlunoComponent, FormAlunoComponent, MatriculaAlunoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    ModalModule.forRoot(),   
    AlunoRoutingModule
  ],
  providers: [
    AlunoService,
    FormBuilder      
  ],
})
export class AlunoModule { }
