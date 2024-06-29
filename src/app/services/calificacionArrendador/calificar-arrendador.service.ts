import { Injectable } from '@angular/core';
import { CalificarArrendador } from '../../models/CalificarArrendador';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CalificarArrendadorService {
  constructor() {}

  insertarCalificacion(
    calificacion: CalificarArrendador
  ): Promise<CalificarArrendador> {
    const token = localStorage.getItem('idHomezArrendatario');

    return axios
      .post<CalificarArrendador>(
        'https://homezbackend.onrender.com/api/homez/calarrendatario',
        calificacion,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => response.data);
  }
}
