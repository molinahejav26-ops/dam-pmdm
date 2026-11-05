import { Component, input, output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje-list-response';

@Component({
  imports: [],
  selector: 'app-personaje-item-component',
  styleUrl: './personaje-item-component.css',
  templateUrl: './personaje-item-component.html',
})
export class PersonajeItemComponent {
  personaje = input.required<Personaje>()

  personajeClicked = output<Personaje>();

  emitPersonajeClicked() {
    this.personajeClicked.emit(this.personaje());
  }
}
