import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ubication } from '../model/Ubication';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UbicacionService {
  private url: string = `${environment.host}/ubications`;
  private confirmaEliminacion = new Subject<Boolean>();
  private token = sessionStorage.getItem('token');
  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json');
  private listaUbication = new Subject<Ubication[]>();

  constructor(private http: HttpClient) {}

  getUbications() {
    return this.http.get<Ubication[]>(this.url, {
      headers: this.headers,
    });
  }

  InsertarUbication(ubication: Ubication) {
    return this.http.post(this.url, ubication, {
      headers: this.headers,
    });
  }

  setListaUbication(listaNuevaUbication: Ubication[]) {
    this.listaUbication.next(listaNuevaUbication);
  }

  getListaUbication() {
    return this.listaUbication.asObservable();
  }

  modifyUbication(ubication: Ubication) {
    return this.http.put(this.url, ubication, {
      headers: this.headers,
    });
  }

  ListarIdUbication(id: number) {
    return this.http.get<Ubication>(`${this.url}/${id}`, {
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
