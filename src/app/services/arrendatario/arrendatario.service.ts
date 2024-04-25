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
    return axios
      .put<Arrendatario>(
        'https://gruposjaveriana.dynaco.co/api/homez/arrendatario',
        arrendatario
      )
      .then((response) => response.data);
  }

  async getArrendatarioByID(): Promise<Arrendatario> {
    return await axios
      .get<Arrendatario>(
        'https://gruposjaveriana.dynaco.co/api/homez/arrendatario/1'
      )
      .then((response) => response.data);
  }
}
