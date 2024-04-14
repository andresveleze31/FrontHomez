import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

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
];
