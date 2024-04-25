import { Injectable } from '@angular/core';
import { Estado } from '../../models/Estado';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {

  constructor() {}

  async getTipos(): Promise<Estado[]> {
    return await axios
      .get<Estado[]>('https://gruposjaveriana.dynaco.co/api/homez/estado')
      .then((response) => response.data);
  }
}
