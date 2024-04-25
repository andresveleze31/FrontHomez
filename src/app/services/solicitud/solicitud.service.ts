import { Injectable } from '@angular/core';
import { Solicitud } from '../../models/Solicitud';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  constructor() {}

  insertarSolicitud(solicitud: Solicitud): Promise<Solicitud> {
    return axios
      .post<Solicitud>(
        'https://gruposjaveriana.dynaco.co/api/homez/solicitud',
        solicitud
      )
      .then((response) => response.data);
  }

  updateSolicitud(solicitud: Solicitud): Promise<Solicitud> {
    return axios
      .put<Solicitud>(
        'https://gruposjaveriana.dynaco.co/api/homez/solicitud',
        solicitud
      )
      .then((response) => response.data);
  }

  async getSolicitudesByPropietario(): Promise<Solicitud[]> {
    return await axios
      .get<Solicitud[]>(
        'http://localhost:9093/api/homez/solicitud/propietario/1'
      )
      .then((response) => response.data);
  }

  async getSolicitudById(id: number | null): Promise<Solicitud> {
    return await axios
      .get<Solicitud>(
        `https://gruposjaveriana.dynaco.co/api/homez/solicitud/${id}`
      )
      .then((response) => response.data);
  }
}
