import { Injectable } from '@angular/core';
import { ArrendadorService } from '../arrendador/arrendador.service';
import { Arrendador } from '../../models/Arrendador';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private arrendadorService: ArrendadorService) {}

  isAuthenticatedArrendador(): boolean {
    const token = localStorage.getItem('idHomezArrendador');
    return !!token;
  }

  isAuthenticatedArrendatario(): boolean {
    const token = localStorage.getItem('idHomezArrendatario');
    return !!token;
  }
}
