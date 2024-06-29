import { Injectable } from '@angular/core';
import { CalificarFinca } from '../../models/CalificarFinca';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CalificarFincaService {
  constructor() {}

  insertarCalificacion(calificacion: CalificarFinca): Promise<CalificarFinca> {
        const token = localStorage.getItem('idHomezArrendatario');

    return axios
      .post<CalificarFinca>(
        'https://homezbackend.onrender.com/api/homez/calpropiedad',
        calificacion,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => response.data);
  }
}
