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
      .get<Propiedad[]>('http://localhost:9093/api/homez/propiedad')
      .then((response) => response.data);
  }
}
