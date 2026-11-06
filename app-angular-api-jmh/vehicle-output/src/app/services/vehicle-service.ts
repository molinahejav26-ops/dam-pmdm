import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleListResponse } from '../interfaces/vehicle-list-response';
import { VehicleDetailResponse } from '../interfaces/vehicle-detail-response';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
    http = inject(HttpClient)

    getAll(): Observable<VehicleListResponse> {
        return this.http.get<VehicleListResponse>(`https://swapi.dev/api/vehicles/`)
    }

    getOne(id: number): Observable<VehicleDetailResponse> {
        return this.http.get<VehicleDetailResponse>(`https://swapi.dev/api/vehicles/${id}`)
    }
}
