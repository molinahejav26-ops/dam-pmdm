import { Component, inject, OnInit, signal } from '@angular/core';
import { RickymortyService } from '../../services/rickymorty-service';
import { Character } from '../../interfaces/character-list-response';
import { CharacterItemComponent } from '../character-item-component/character-item-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModal } from '../character-modal/character-modal';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit {

  characterService = inject(RickymortyService);
  characterList = signal<Character[]>([]);
  loading = signal(true);
  errorMessage = signal('');
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.characterService.getAll().subscribe({
      next: (resp) => {
        this.characterList.set(resp.results);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        console.error('No se pudieron cargar los personajes.', error);
        this.errorMessage.set('No se pudieron cargar los personajes. Comprueba tu conexión e inténtalo de nuevo.');
        this.loading.set(false);
      },
    });
  }

  openCharacterModal(character: Character) {
    const modalRef = this.modalService.open(CharacterModal);
    modalRef.componentInstance.characterDetail = character;
  }
}
