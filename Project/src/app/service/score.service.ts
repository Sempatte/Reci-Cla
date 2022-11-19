import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Score } from '../model/Score';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private token = sessionStorage.getItem('token');
  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  private url: string = `${environment.host}/scores`;
  private listaScore = new Subject<Score[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  listarScores() {
    return this.http.get<Score[]>(this.url, {
      headers: this.headers,
    });
  }

  insertarScore(score: Score) {
    return this.http.post(this.url, score, {
      headers: this.headers,
    });
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }

  listarIdScore(id: number) {
    return this.http.get<Score>(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }

  modificarScore(score: Score) {
    return this.http.put(this.url, score, {
      headers: this.headers,
    });
  }

  setListaScore(listaNueva: Score[]) {
    this.listaScore.next(listaNueva);
  }

  getListaScore() {
    return this.listaScore.asObservable();
  }

  setConfirmaEliminacion(confirma: Boolean) {
    this.confirmaEliminacion.next(confirma);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
}
