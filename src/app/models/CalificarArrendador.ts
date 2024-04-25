import { Solicitud } from "./Solicitud";

export class CalificarArrendador {
  constructor(
    public id?: number | null,
    public calificacion?: number | null,
    public comentario?: string | null,
    public solicitud?: Solicitud | null
  ) {}
}
