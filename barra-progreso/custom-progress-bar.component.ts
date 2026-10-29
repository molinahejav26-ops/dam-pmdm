import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar',
  standalone: true,
  templateUrl: './custom-progress-bar.component.html',
  styleUrl: './custom-progress-bar.component.css',
})
export class CustomProgressBarComponent {
  /** Valor de la barra de progreso (0-100) */
  @Input() value = 0;

  /** Color de la barra (clase de Bootstrap: success, info, warning, danger, etc.) */
  @Input() color = 'primary';

  /** Si se muestra con estilo rayado (striped) */
  @Input() striped = false;

  /** Si se muestra animado (animated stripes) */
  @Input() animated = false;

  /** Si se muestra el porcentaje como texto dentro de la barra */
  @Input() showText = false;
}
