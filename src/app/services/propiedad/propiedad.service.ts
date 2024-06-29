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
      .get<Propiedad[]>('https://homezbackend.onrender.com/api/homez/propiedad')
      .then((response) => response.data);
  }

  async getPropiedadesByPropietario(): Promise<Propiedad[]> {
    const token = localStorage.getItem('idHomezArrendador');
    console.log(token);
    return await axios
      .get<Propiedad[]>(
        'https://homezbackend.onrender.com/api/homez/propiedad/propietario',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => response.data);
  }

  async getPropiedadById(id: number | null): Promise<Propiedad> {
    return await axios
      .get<Propiedad>(`https://homezbackend.onrender.com/api/homez/propiedad/${id}`)
      .then((response) => response.data);
  }

  insertarPropiedad(propiedad: Propiedad): Promise<Propiedad> {
    const token = localStorage.getItem('idHomezArrendador');

    return axios
      .post<Propiedad>('https://homezbackend.onrender.com/api/homez/propiedad', propiedad, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }

  updatePropiedad(propiedad: Propiedad): Promise<Propiedad> {
    const token = localStorage.getItem('idHomezArrendador');

    return axios
      .put<Propiedad>('https://homezbackend.onrender.com/api/homez/propiedad', propiedad, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }
}
