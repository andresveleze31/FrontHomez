import { Injectable } from '@angular/core';
import { Propiedad } from '../../models/Propiedad';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PropiedadService {
  constructor() {}

  async getPropiedades(): Promise<Propiedad[]> {
    return await axios
      .get<Propiedad[]>('https://gruposjaveriana.dynaco.co/api/homez/propiedad')
      .then((response) => response.data);
  }

  async getPropiedadById(id: number | null): Promise<Propiedad> {
    return await axios
      .get<Propiedad>(
        `https://gruposjaveriana.dynaco.co/api/homez/propiedad/${id}`
      )
      .then((response) => response.data);
  }

  insertarPropiedad(propiedad: Propiedad): Promise<Propiedad> {
    return axios
      .post<Propiedad>(
        'https://gruposjaveriana.dynaco.co/api/homez/propiedad',
        propiedad
      )
      .then((response) => response.data);
  }
}
