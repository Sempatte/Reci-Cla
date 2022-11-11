import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Score } from '../model/Score';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private http: HttpClient) {}

  private url: string = `${environment.host}/scores`;
  private listaScore = new Subject<Score[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  listarScores() {
    return this.http.get<Score[]>(this.url);
  }

  insertarScore(score: Score) {
    return this.http.post(this.url, score);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listarIdScore(id: number) {
    return this.http.get<Score>(`${this.url}/${id}`);
  }

  modificarScore(score: Score) {
    return this.http.put(this.url, score);
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
