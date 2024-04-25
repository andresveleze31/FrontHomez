import { Injectable } from '@angular/core';
import { CalificarFinca } from '../../models/CalificarFinca';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CalificarFincaService {
  constructor() {}

  insertarCalificacion(calificacion: CalificarFinca): Promise<CalificarFinca> {
    return axios
      .post<CalificarFinca>(
        'https://gruposjaveriana.dynaco.co/api/homez/calpropiedad',
        calificacion
      )
      .then((response) => response.data);
  }
}
