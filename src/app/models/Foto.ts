import { Propiedad } from "./Propiedad";

export class Foto {
  constructor(
    public id?: number | null,
    public foto?: string | null,
    public propiedad?: Propiedad | null
  ) {
    if (!id) {
      this.id = null;
    }
  }
}
