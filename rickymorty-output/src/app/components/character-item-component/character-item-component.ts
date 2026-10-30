import { Component, input, output } from '@angular/core';
import { Character } from '../../interfaces/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {
  character = input.required<Character>();

  characterClicked = output<Character>();

  emitCharacterClicked() {
    this.characterClicked.emit(this.character());
  }
}
