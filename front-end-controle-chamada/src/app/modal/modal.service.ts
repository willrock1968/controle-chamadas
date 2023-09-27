import { ModalComponent } from './../modal/modal.component';
import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
   
  constructor(private modalService: BsModalService) { }

  showModal(message: string)
  {
    const initialState = {
      title: 'Aviso',
      message: message
    };

    const bsModalRef: BsModalRef = this.modalService.show(ModalComponent, {initialState});
    bsModalRef.content.closeBtnName = 'Fechar';
  }
}
