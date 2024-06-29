import { Injectable } from '@angular/core';
import { Solicitud } from '../../models/Solicitud';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  constructor() {}

  insertarSolicitud(solicitud: Solicitud): Promise<Solicitud> {
    const token = localStorage.getItem('idHomezArrendatario');
    return axios
      .post<Solicitud>('https://homezbackend.onrender.com/api/homez/solicitud', solicitud, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }

  updateSolicitud(solicitud: Solicitud): Promise<Solicitud> {
    const token = localStorage.getItem('idHomezArrendador');

    return axios
      .put<Solicitud>('https://homezbackend.onrender.com/api/homez/solicitud', solicitud, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }

  async getSolicitudesByPropietario(): Promise<Solicitud[]> {
    const token = localStorage.getItem('idHomezArrendador');
    return await axios
      .get<Solicitud[]>(
        'https://homezbackend.onrender.com/api/homez/solicitud/propietario',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => response.data);
  }

  async getSolicitudById(id: number | null): Promise<Solicitud> {
    let token = localStorage.getItem('idHomezArrendador');

    if (!token) {
      token = localStorage.getItem('idHomezArrendatario');
    }

    return await axios
      .get<Solicitud>(`https://homezbackend.onrender.com/api/homez/solicitud/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }

  async getSolicitudesByArrendatario(): Promise<Solicitud[]> {
    const token = localStorage.getItem('idHomezArrendatario');
    return await axios
      .get<Solicitud[]>(
        'https://homezbackend.onrender.com/api/homez/solicitud/arrendatario',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => response.data);
  }
}
