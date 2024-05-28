import { Injectable } from '@angular/core';
import axios from 'axios';
import { Arrendatario } from '../../models/Arrendatario';

@Injectable({
  providedIn: 'root',
})
export class ArrendatarioService {
  constructor() {}

  insertarArrendatario(arrendatario: Arrendatario): Promise<Arrendatario> {
    return axios
      .post<Arrendatario>(
        'https://gruposjaveriana.dynaco.co/api/homez/arrendatario',
        arrendatario
      )
      .then((response) => response.data);
  }

  updateArrendatario(arrendatario: Arrendatario): Promise<Arrendatario> {
    const token = localStorage.getItem('idHomezArrendatario');

    return axios
      .put<Arrendatario>(
        'https://gruposjaveriana.dynaco.co/api/homez/arrendatario',
        arrendatario,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => response.data);
  }

  async getArrendatarioByID(): Promise<Arrendatario> {
    const token = localStorage.getItem('idHomezArrendatario');
    return await axios
      .get<Arrendatario>('https://gruposjaveriana.dynaco.co/api/homez/arrendatario/one', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }
}
