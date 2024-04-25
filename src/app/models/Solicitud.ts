import { Arrendatario } from './Arrendatario';
import { Estado } from './Estado';
import { Propiedad } from './Propiedad';

export class Solicitud {
  constructor(
    public id?: number | null | undefined,
    public fechaInicio?: number | string | null,
    public fechaFin?: number | string | null,
    public personas?: number | null,
    public valor?: number | null,
    public calificacion?: number | null,
    public createdAt?: number | string | null,
    public pago?: string | null,
    public calificacionArrendatario?: string | null,
    public calificacionPropiedad?: string | null,
    public estado?: Estado | null,
    public arrendatario?: Arrendatario | null,
    public propiedad?: Propiedad | null
  ) {
    if (!calificacion) {
      this.calificacion = 5;
    }

    if (!createdAt) {
      this.createdAt = new Date().toISOString();
    }

    if (!pago) {
      this.pago = null;
    }

    if (!calificacionArrendatario) {
      this.calificacionArrendatario = null;
    }

    if (!calificacionPropiedad) {
      this.calificacionPropiedad = null;
    }
  }
}
