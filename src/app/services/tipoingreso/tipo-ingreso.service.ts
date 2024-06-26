import { Injectable } from '@angular/core';
import { TipoIngreso } from '../../models/TipoIngreso';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TipoIngresoService {
  constructor() {}

  async getTiposIngreso(): Promise<TipoIngreso[]> {
    return await axios
      .get<TipoIngreso[]>('https://homezbackend.onrender.com/api/homez/tipoingreso')
      .then((response) => response.data);
  }
}
