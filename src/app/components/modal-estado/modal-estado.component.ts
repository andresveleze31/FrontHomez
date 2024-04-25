import { Component } from '@angular/core';
import { ArrendadorsolicitudesComponent } from '../../admin/arrendador/arrendadorsolicitudes/arrendadorsolicitudes.component';

@Component({
  selector: 'app-modal-estado',
  standalone: true,
  imports: [],
  templateUrl: './modal-estado.component.html',
  styleUrl: './modal-estado.component.scss',
})
export class ModalEstadoComponent {
  constructor(private modalService: ArrendadorsolicitudesComponent) {}

  showModal(){
    this.modalService.showModalEstado()
  }
}
