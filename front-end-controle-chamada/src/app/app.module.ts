import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './login/auth/auth.module';
import { NivelCursoModule } from './nivel-curso/nivel-curso.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NivelCursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
