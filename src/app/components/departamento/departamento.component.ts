import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-departamento',
  standalone: true,
  imports: [],
  templateUrl: './departamento.component.html',
  styleUrl: './departamento.component.scss',
})
export class DepartamentoComponent {
  @Input() nombre: string = '';
  @Input() img: string = '';
  @Input() precio: string = '';
}
