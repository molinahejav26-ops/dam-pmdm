import { Component, inject, signal } from '@angular/core';
import { VehicleItemComponent } from '../vehicle-item-component/vehicle-item-component';
import { VehicleService } from '../../services/vehicle-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from '../../interfaces/vehicle-list-response';
import { VehicleModal } from '../vehicle-modal/vehicle-modal';

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicle-list-component',
  styleUrl: './vehicle-list-component.css',
  templateUrl: './vehicle-list-component.html',
})
export class VehicleListPage {
  pesonajeService = inject(VehicleService);
  vehicleList = signal<Vehicle[]>([]);
  loading = signal(true);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.pesonajeService.getAll().subscribe({
      next: (resp) => {
        this.vehicleList.set(resp.results);
        this.loading.set(false);
      },
    });
  }

  openVehicleModal(vehicle: Vehicle) {
    const modalRef = this.modalService.open(VehicleModal);
    modalRef.componentInstance.vehicleDetail = vehicle;
  }

}
