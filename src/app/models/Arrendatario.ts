export class Arrendatario {
  constructor(
    public id?: number | null,
    public nombre?: string | null,
    public apellido?: string | null,
    public correo?: string | null,
    public telefono?: number | string | null,
    public contraseña?: string | null,
    public createdAt?: number | string | null
  ) {
    if (!createdAt) {
      this.createdAt = new Date().toISOString();
    }
  }
}
