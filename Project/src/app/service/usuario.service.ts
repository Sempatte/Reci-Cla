import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recycler } from '../model/Recycler';
import { Score } from '../model/Score';

@Injectable({
  providedIn: 'root'
})
export class UsuarioTsService {

  url : string = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  getListaRecicladores() {
    return this.http.get<Recycler[]>(`${this.url}recyclers`);
  }

  getScoresRecolectores() {
    return this.http.get<Score[]>(`${this.url}recyclers?_embed=Scores`);
  }
}
