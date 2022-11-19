import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Reward } from 'src/app/model/Reward';
@Injectable({
  providedIn: 'root',
})
export class RewardService {
  private token = sessionStorage.getItem('token');
  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json');
  private url: string = `${environment.host}/reward`;
  private listaCambio = new Subject<Reward[]>();
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http: HttpClient) {}

  listarRewards() {
    return this.http.get<Reward[]>(this.url, {
      headers: this.headers,
    });
  }
  insertarRewards(rew: Reward) {
    return this.http.post(this.url, rew, {
      headers: this.headers,
    });
  }
  modifyRewards(rew: Reward) {
    return this.http.put(this.url, rew, {
      headers: this.headers,
    });
  }
  eliminarReward(id: number) {
    return this.http.delete(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }
  buscar(texto: string) {
    return this.http.post<Reward[]>(`${this.url}/buscar`, texto, {
      headers: this.headers,
    });
  }
  ListarIdReward(id: number) {
    return this.http.get<Reward>(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }
  getListaRewards() {
    return this.listaCambio.asObservable();
  }
  setListaRewards(listaNueva: Reward[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
