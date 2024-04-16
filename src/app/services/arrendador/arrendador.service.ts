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
    return axios
      .put<Arrendador>(
        'https://gruposjaveriana.dynaco.co/api/homez/arrendador',
        arrendador
      )
      .then((response) => response.data);
  }

  async getArrendadorByID(): Promise<Arrendador> {
    return await axios
      .get<Arrendador>(
        'https://gruposjaveriana.dynaco.co/api/homez/arrendador/1'
      )
      .then((response) => response.data);
  }
}
