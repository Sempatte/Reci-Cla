import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Types } from '../model/Types';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TypeOfRewardService {
  private url: string = `${environment.host}/types`;
  private confirmaEliminacion = new Subject<Boolean>();
  private token = sessionStorage.getItem('token');
  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json');
  private listaCambio = new Subject<Types[]>();

  constructor(private http: HttpClient) {}

  listarTypeOfReward() {
    return this.http.get<Types[]>(this.url, {
      headers: this.headers,
    });
  }

  insertarTypeOfReward(types: Types) {
    return this.http.post(this.url, types);
  }

  setListaTypeOfReward(listaNueva: Types[]) {
    this.listaCambio.next(listaNueva);
  }

  getListaTypeOfReward() {
    return this.listaCambio.asObservable();
  }

  modifyTypeOfReward(types: Types) {
    return this.http.put(this.url, types, {
      headers: this.headers,
    });
  }

  ListarIdTypeOfReward(id: number) {
    return this.http.get<Types>(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
