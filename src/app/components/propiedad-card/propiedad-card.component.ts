import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propiedad-card',
  standalone: true,
  imports: [],
  templateUrl: './propiedad-card.component.html',
  styleUrl: './propiedad-card.component.scss',
})
export class PropiedadCardComponent {
  @Input() nombre: string = '';
  @Input() departamento: string = '';
  @Input() municipio: string = '';
  @Input() habitaciones: number | null | undefined = null;
  @Input() banos: string = '';
  @Input() valor: number | null | undefined = null;
  @Input() img: string = '';
  @Input() personas: number | null | undefined = null;
}
