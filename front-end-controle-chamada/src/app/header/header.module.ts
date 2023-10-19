import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    ModalModule.forRoot()    
  ],
  exports: [
    // Exporte componentes, diretivas ou módulos que deseja disponibilizar em outros módulos
    HeaderComponent
  
  ]
})
export class HeaderModule { }
