import { Component, inject, OnInit, signal } from '@angular/core';
import { StarwarsService } from '../../services/starwars-service';
import { Personaje } from '../../interfaces/personaje-list-response';
import { PersonajeItemComponent } from '../personaje-item-component/personaje-item-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonajeModal } from '../personaje-modal/personaje-modal';

@Component({
  imports: [PersonajeItemComponent],
  selector: 'app-personaje-list-component',
  styleUrl: './personaje-list-component.css',
  templateUrl: './personaje-list-component.html',
})
export class PersonajeListComponent implements OnInit {

  pesonajeService = inject(StarwarsService);
  personajeList = signal<Personaje[]>([]);
  loading = signal(true);
  errorMessage = signal('');
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.pesonajeService.getAll().subscribe({
      next: (resp) => {
        this.personajeList.set(resp.results);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        console.error('No se pudieron cargar los personajes.', error);
        this.errorMessage.set('No se pudieron cargar los personajes. Comprueba tu conexión e inténtalo de nuevo.');
        this.loading.set(false);
      },
    });
  }

  openPersonajeModal(personaje: Personaje) {
    const modalRef = this.modalService.open(PersonajeModal);
    modalRef.componentInstance.personajeDetail = personaje;
  }
}
