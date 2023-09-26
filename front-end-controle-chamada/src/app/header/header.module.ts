import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule    
  ],
  exports: [
    // Exporte componentes, diretivas ou módulos que deseja disponibilizar em outros módulos
    HeaderComponent
  
  ]
})
export class HeaderModule { }
