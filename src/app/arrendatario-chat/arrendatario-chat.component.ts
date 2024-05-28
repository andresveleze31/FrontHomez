import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../components/navbardashboard/navbardashboard.component';
import { SidebararrendatarioComponent } from '../components/arrendatario/sidebararrendatario/sidebararrendatario.component';
import { ChatComponent } from '../components/chat/chat.component';
import { SolicitudService } from '../services/solicitud/solicitud.service';
import { Solicitud } from '../models/Solicitud';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from '../services/chat/chat.service';

@Component({
  selector: 'app-arrendatario-chat',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    SidebararrendatarioComponent,
    ChatComponent,
    CommonModule,
  ],
  templateUrl: './arrendatario-chat.component.html',
  styleUrl: './arrendatario-chat.component.scss',
})
export class ArrendatarioChatComponent {
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
    window.location.href = '/homez/arrendatario/chat';
  }

  cargarSolicitudes() {
    this.solicitudService
      .getSolicitudesByArrendatario()
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
