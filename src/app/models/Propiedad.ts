import { Arrendador } from './Arrendador';
import { Departamento } from './Departamento';
import { Foto } from './Foto';
import { Municipio } from './Municipio';
import { Tipo } from './Tipo';
import { TipoIngreso } from './TipoIngreso';

export class Propiedad {
  constructor(
    public id?: number | null | undefined,
    public activa?: boolean | null,
    public nombre?: string | null,
    public descripcion?: string | null,
    public personas?: number | null,
    public habitaciones?: number | null,
    public baños?: number | null,
    public mascotas?: boolean | null,
    public piscina?: boolean | null,
    public asador?: boolean | null,
    public valor?: number | null,
    public calificacion?: number | null,
    public departamento?: Departamento | null,
    public municipio?: Municipio | null,
    public tipoIngreso?: TipoIngreso | null,
    public arrendador?: Arrendador | null,
    public tipo?: Tipo | null,
    public fotos?: Foto[] | null
  ) {
    if (fotos?.length === 0 || fotos == undefined) {
      this.fotos = []
    }

    if (!baños) {
      this.baños = 4
    }

    if (!id) {
      this.id = null;
    }

    if (!activa) {
      this.activa = true;
    }

    if (!calificacion) {
      this.calificacion = 5;
    }
  }
}
