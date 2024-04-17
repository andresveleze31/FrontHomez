import { Injectable } from '@angular/core';
import { Municipio } from '../../models/Municipio';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MunicipioService {
  constructor() {}

  async getMunicipios(): Promise<Municipio[]> {
    return await axios
      .get<Municipio[]>(
        'https://gruposjaveriana.dynaco.co/api/homez/municipio'
      )
      .then((response) => response.data);
  }
}
