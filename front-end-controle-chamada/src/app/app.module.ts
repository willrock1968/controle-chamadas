import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './login/auth/auth.module';
import { NivelCursoModule } from './nivel-curso/nivel-curso.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CursoModule } from './curso/curso.module';
import { TurmaModule } from './turma/turma.module';
import { AlunoModule } from './aluno/aluno.module';
import { AulaModule } from './aula/aula.module';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    HeaderModule,
    FooterModule,
    AuthModule,
    NivelCursoModule,
    CursoModule,
    TurmaModule,
    AlunoModule,
    AulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
