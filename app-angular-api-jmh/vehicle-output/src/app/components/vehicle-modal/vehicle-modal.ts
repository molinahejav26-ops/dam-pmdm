import { Component, inject, Input } from '@angular/core';
import { VehicleDetailResponse } from '../../interfaces/vehicle-detail-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-vehicle-modal',
  styleUrl: './vehicle-modal.css',
  templateUrl: './vehicle-modal.html',
})
export class VehicleModal {
    activeModal: NgbActiveModal = inject(NgbActiveModal);

  @Input() vehicleDetail: VehicleDetailResponse | undefined;
}
