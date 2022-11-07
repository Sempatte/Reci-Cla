import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Types } from '../model/Types';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class TypeOfRewardService {
  private url: string = `${environment.host}/types`;

  private confirmaEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Types[]>();

  constructor(private http: HttpClient) {}

  listarTypeOfReward() {
    return this.http.get<Types[]>(this.url);
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
    return this.http.put(this.url, types);
  }

  ListarIdTypeOfReward(id: number) {
    return this.http.get<Types>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
