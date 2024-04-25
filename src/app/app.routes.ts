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
  },
  {
    path: 'homez/arrendador/crear-propiedad',
    component: CreatePropiedadComponent,
  },
  {
    path: 'homez/arrendador/mis-propiedades',
    component: MispropiedadesComponent,
  },
  {
    path: 'homez/arrendador/perfil',
    component: ArrendadorperfilComponent,
  },
  {
    path: 'homez/arrendador/solicitudes',
    component: ArrendadorsolicitudesComponent,
  },
  {
    path: 'homez/arrendatario/dashboard',
    component: DashboardArrendatarioComponent,
  },
  {
    path: 'homez/arrendatario/perfil',
    component: ArrendatarioperfilComponent,
  },
  {
    path: 'homez/arrendatario/solicitudes',
    component: ArrendatariosolicitudesComponent,
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
  },
  {
    path: 'homez/arrendador/actualizar-solicitud/:id',
    component: ActualizarSolicitudComponent,
  },
  {
    path: 'homez/arrendatario/calificar-finca/:id',
    component: CalificarFincaComponent,
  },
  {
    path: 'homez/arrendatario/calificar-arrendador/:id',
    component: CalificarArrendadorComponent,
  },
];
