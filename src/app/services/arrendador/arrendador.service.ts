import { Injectable } from '@angular/core';
import { Arrendador } from '../../models/Arrendador';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ArrendadorService {
  constructor() {}

  insertarArrendador(arrendador: Arrendador): Promise<Arrendador> {
    return axios
      .post<Arrendador>(
        'https://gruposjaveriana.dynaco.co/api/homez/arrendador',
        arrendador
      )
      .then((response) => response.data);
  }

  updateArrendador(arrendador: Arrendador): Promise<Arrendador> {
    const token = localStorage.getItem('idHomezArrendador');

    return axios
      .put<Arrendador>(
        'https://gruposjaveriana.dynaco.co/api/homez/arrendador',
        arrendador,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => response.data);
  }

  async getArrendadorByID(): Promise<Arrendador> {
    const token = localStorage.getItem('idHomezArrendador');
    return await axios
      .get<Arrendador>('https://gruposjaveriana.dynaco.co/api/homez/arrendador/one', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }
}
