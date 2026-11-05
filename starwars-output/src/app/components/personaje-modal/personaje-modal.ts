import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonajeDetailResponse } from '../../interfaces/personaje-detail-response';

@Component({
  imports: [],
  selector: 'app-personaje-modal',
  styleUrl: './personaje-modal.css',
  templateUrl: './personaje-modal.html',
})
export class PersonajeModal {
  activeModal: NgbActiveModal = inject(NgbActiveModal);

  @Input() personajeDetail: PersonajeDetailResponse | undefined;
}
