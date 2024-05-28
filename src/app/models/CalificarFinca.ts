import { Propiedad } from './Propiedad';

export class CalificarFinca {
  constructor(
    public id?: number | null,
    public calificacion?: number | null,
    public comentario?: string | null,
    public propiedad?: Propiedad | null
  ) {}
}
