import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios from 'axios';
import { Tipo } from '../../models/Tipo';
@Injectable({
  providedIn: 'root',
})
export class TipoService {
  constructor() {}

  async getTipos(): Promise<Tipo[]> {
    return await axios
      .get<Tipo[]>('https://homezbackend.onrender.com/api/homez/tipo')
      .then((response) => response.data);
  }
}
