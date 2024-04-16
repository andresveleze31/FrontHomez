import { Arrendador } from './Arrendador';
import { Departamento } from './Departamento';
import { Foto } from './Foto';
import { Municipio } from './Municipio';
import { Tipo } from './Tipo';
import { TipoIngreso } from './TipoIngreso';

export class Propiedad {
  constructor(
    public id?: number | null,
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
  ) {}
}
