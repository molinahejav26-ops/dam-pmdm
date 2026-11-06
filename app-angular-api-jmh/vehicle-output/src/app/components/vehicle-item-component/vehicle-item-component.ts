import { Component, input, output } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle-list-response';

@Component({
  imports: [],
  selector: 'app-vehicle-item-component',
  styleUrl: './vehicle-item-component.css',
  templateUrl: './vehicle-item-component.html',
})
export class VehicleItemComponent {
  vehicle = input.required<Vehicle>()

  vehicleClicked = output<Vehicle>()

  emitVehicleClicked(){
    this.vehicleClicked.emit(this.vehicle());
  }
}
