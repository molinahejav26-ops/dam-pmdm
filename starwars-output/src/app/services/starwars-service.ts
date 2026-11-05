import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonajeListResponse } from '../interfaces/personaje-list-response';
import { PersonajeDetailResponse } from '../interfaces/personaje-detail-response';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
    http = inject(HttpClient);

    getAll(): Observable<PersonajeListResponse> {
        return this.http.get<PersonajeListResponse>('https://swapi.dev/api/people');
    }

    getOne(id: number): Observable<PersonajeDetailResponse> {
        return this.http.get<PersonajeDetailResponse>(`https://swapi.dev/api/people/${id}`);
    }

}
