import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CharacterListResponse } from '../interfaces/character-list-response';
import { Observable } from 'rxjs';
import { CharacterDetailResponse } from '../interfaces/character-detail-response';

@Injectable({ providedIn: 'root' })
export class RickymortyService {
    http = inject(HttpClient);

    getAll():  Observable<CharacterListResponse> {
        return this.http.get<CharacterListResponse>('https://rickandmortyapi.com/api/character');
    }

    getOne(id: number): Observable<CharacterDetailResponse> {
        return this.http.get<CharacterDetailResponse>(`https://rickandmortyapi.com/api/character/${id}`);
    }
}
