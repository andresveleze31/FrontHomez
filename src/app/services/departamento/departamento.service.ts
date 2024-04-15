import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios from 'axios';
import { Departamento } from '../../models/Departamento';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  constructor() {}

  async getDepartamentos(): Promise<Departamento[]> {
    return await axios
      .get<Departamento[]>('http://localhost:9093/api/homez/departamento')
      .then((response) => response.data);
  }
}
