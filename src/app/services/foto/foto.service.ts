import { Injectable } from '@angular/core';
import { Foto } from '../../models/Foto';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FotoService {
  constructor() {}

  insertarFoto(foto: Foto): Promise<Foto> {
    const token = localStorage.getItem('idHomezArrendador');

    return axios
      .post<Foto>('https://homezbackend.onrender.com/api/homez/foto', foto, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }

  updateFoto(foto: Foto): Promise<Foto> {
    const token = localStorage.getItem('idHomezArrendador');

    return axios
      .put<Foto>('https://homezbackend.onrender.com/api/homez/foto', foto, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }
}
