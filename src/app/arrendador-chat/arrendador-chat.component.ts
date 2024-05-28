import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../components/arrendador/sidebararrendador/sidebararrendador.component';
import { SolicitudService } from '../services/solicitud/solicitud.service';
import { Solicitud } from '../models/Solicitud';
import { ChatService } from '../services/chat/chat.service';
import { ChatComponent } from '../components/chat/chat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arrendador-chat',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    CommonModule,
    SidebararrendadorComponent,
    ChatComponent,
  ],
  templateUrl: './arrendador-chat.component.html',
  styleUrl: './arrendador-chat.component.scss',
})
export class ArrendadorChatComponent {
  solicitudes: Solicitud[] = [];

  constructor(
    private solicitudService: SolicitudService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

  changeRoom(roomId: any) {
    console.log(roomId);
    localStorage.setItem('chat', roomId);
    window.location.href = '/homez/arrendador/chat';
  }

  cargarSolicitudes() {
    this.solicitudService
      .getSolicitudesByPropietario()
      .then((post) => {
        this.solicitudes = post;
        console.log(this.solicitudes);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  formatDate(dateString: string | number | null | undefined): string {
    if (!dateString) {
      return '';
    }
    const date =
      typeof dateString === 'string'
        ? new Date(dateString)
        : new Date(dateString);
    return date.toLocaleDateString(); // Puedes ajustar el formato según tus necesidades
  }
}
