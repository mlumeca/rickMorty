import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, CharacterListResponse } from '../models/character.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  constructor(private http: HttpClient) { }

  getCharacterList(): Observable<CharacterListResponse> {
    return this.http.get<CharacterListResponse>('https://rickandmortyapi.com/api/character');
  }
}