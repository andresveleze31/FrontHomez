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
    return axios
      .post<CalificarArrendador>(
        'https://gruposjaveriana.dynaco.co/api/homez/calarrendatario',
        calificacion
      )
      .then((response) => response.data);
  }
}
