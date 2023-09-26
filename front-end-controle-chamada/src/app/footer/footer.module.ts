import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],exports: [
    // Exporte componentes, diretivas ou módulos que deseja disponibilizar em outros módulos
    FooterComponent
  
  ]
})
export class FooterModule { }
