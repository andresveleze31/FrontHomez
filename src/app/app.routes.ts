import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardArrendadorComponent } from './admin/arrendador/dashboard-arrendador/dashboard-arrendador.component';
import { DashboardArrendatarioComponent } from './admin/arrendatario/dashboard-arrendatario/dashboard-arrendatario.component';

export const routes: Routes = [
  {
    path: 'homez/home',
    component: HomeComponent,
  },
  {
    path: 'homez/propiedades',
    component: PropiedadesComponent,
  },
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
    path: 'homez/arrendatario/dashboard',
    component: DashboardArrendatarioComponent,
  },
];
