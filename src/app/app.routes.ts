import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardArrendadorComponent } from './admin/arrendador/dashboard-arrendador/dashboard-arrendador.component';
import { DashboardArrendatarioComponent } from './admin/arrendatario/dashboard-arrendatario/dashboard-arrendatario.component';
import { RegisterArrendadorComponent } from './pages/register-arrendador/register-arrendador.component';
import { RegisterArrendatarioComponent } from './pages/register-arrendatario/register-arrendatario.component';
import { CreatePropiedadComponent } from './admin/arrendador/create-propiedad/create-propiedad.component';
import { MispropiedadesComponent } from './admin/arrendador/mispropiedades/mispropiedades.component';
import { ArrendadorperfilComponent } from './admin/arrendador/arrendadorperfil/arrendadorperfil.component';
import { ArrendatarioperfilComponent } from './admin/arrendatario/arrendatarioperfil/arrendatarioperfil.component';
import { ArrendadorsolicitudesComponent } from './admin/arrendador/arrendadorsolicitudes/arrendadorsolicitudes.component';
import { ArrendatariosolicitudesComponent } from './admin/arrendatario/arrendatariosolicitudes/arrendatariosolicitudes.component';
import { PropiedadDetallesComponent } from './pages/propiedad-detalles/propiedad-detalles.component';
import { ActualizarPropiedadComponent } from './admin/arrendador/actualizar-propiedad/actualizar-propiedad.component';
import { ActualizarSolicitudComponent } from './admin/arrendador/actualizar-solicitud/actualizar-solicitud.component';
import { CalificarFincaComponent } from './admin/arrendatario/calificar-finca/calificar-finca.component';
import { CalificarArrendadorComponent } from './admin/arrendatario/calificar-arrendador/calificar-arrendador.component';
import { LoginArrendatarioComponent } from './pages/login-arrendatario/login-arrendatario.component';
import { LoginArrendadorComponent } from './pages/login-arrendador/login-arrendador.component';
import { AuthGuardArrendadorService } from './services/authArrendador/auth-guard-arrendador.service';
import { AuthGuardArrendatarioService } from './services/authArrendatario/auth-guard-arrendatario.service';
import { ChatComponent } from './components/chat/chat.component';
import { ArrendatarioChatComponent } from './arrendatario-chat/arrendatario-chat.component';
import { ArrendadorChatComponent } from './arrendador-chat/arrendador-chat.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'homez/home',
    component: HomeComponent,
  },
  {
    path: 'homez/propiedades',
    component: PropiedadesComponent,
  },
  { path: 'homez/propiedad/:id', component: PropiedadDetallesComponent },
  {
    path: 'homez/blog',
    component: BlogComponent,
  },
  {
    path: 'homez/about',
    component: AboutComponent,
  },
  {
    path: 'homez/arrendador/dashboard',
    component: DashboardArrendadorComponent,
    canActivate: [AuthGuardArrendadorService],
  },
  {
    path: 'homez/arrendador/crear-propiedad',
    component: CreatePropiedadComponent,
    canActivate: [AuthGuardArrendadorService],
  },
  {
    path: 'homez/arrendador/mis-propiedades',
    component: MispropiedadesComponent,
    canActivate: [AuthGuardArrendadorService],
  },
  {
    path: 'homez/arrendador/perfil',
    component: ArrendadorperfilComponent,
    canActivate: [AuthGuardArrendadorService],
  },
  {
    path: 'homez/arrendador/solicitudes',
    component: ArrendadorsolicitudesComponent,
    canActivate: [AuthGuardArrendadorService],
  },
  {
    path: 'homez/arrendatario/dashboard',
    component: DashboardArrendatarioComponent,
    canActivate: [AuthGuardArrendatarioService],
  },
  {
    path: 'homez/arrendatario/perfil',
    component: ArrendatarioperfilComponent,
    canActivate: [AuthGuardArrendatarioService],
  },
  {
    path: 'homez/login/arrendatario',
    component: LoginArrendatarioComponent,
  },
  {
    path: 'homez/login/arrendador',
    component: LoginArrendadorComponent,
  },
  {
    path: 'homez/arrendatario/solicitudes',
    component: ArrendatariosolicitudesComponent,
    canActivate: [AuthGuardArrendatarioService],
  },
  {
    path: 'homez/register/arrendador',
    component: RegisterArrendadorComponent,
  },
  {
    path: 'homez/register/arrendatario',
    component: RegisterArrendatarioComponent,
  },
  {
    path: 'homez/arrendador/actualizar-propiedad/:id',
    component: ActualizarPropiedadComponent,
    canActivate: [AuthGuardArrendadorService],
  },
  {
    path: 'homez/arrendador/actualizar-solicitud/:id',
    component: ActualizarSolicitudComponent,
    canActivate: [AuthGuardArrendadorService],
  },
  {
    path: 'homez/arrendatario/calificar-finca/:id',
    component: CalificarFincaComponent,
    canActivate: [AuthGuardArrendatarioService],
  },
  {
    path: 'homez/arrendatario/calificar-arrendador/:id',
    component: CalificarArrendadorComponent,
    canActivate: [AuthGuardArrendatarioService],
  },
  {
    path: 'homez/arrendatario/chat',
    component: ArrendatarioChatComponent,
    canActivate: [AuthGuardArrendatarioService],
  },
  {
    path: 'homez/arrendador/chat',
    component: ArrendadorChatComponent,
    canActivate: [AuthGuardArrendadorService],
  },
  {
    path: 'homez/chat/:userId',
    component: ChatComponent,
  },
];
