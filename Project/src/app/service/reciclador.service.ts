import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Subject, EMPTY } from 'rxjs';
import { Score } from '../model/Score';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RecicladorService {
  constructor(private http: HttpClient) {}

  private url: string = `${environment.host}/usuarios`;
  private listaUser = new Subject<User[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  getAllUsers() {
    return this.http.get<User[]>(this.url);
  }

  getRecicladores() {
    return this.http.get<User[]>(`${this.url}/ListarRecicladores`);
  }

  getRecolectores() {
    return this.http.get<User[]>(`${this.url}/ListarRecolectores`);
  }

  getScoresRecolectores() {
    return this.http.get<Score[]>(`${environment.host}/scores`); // CAMBIAR
  }

  getTicketRecicladores() {
    return this.http.get<Score[]>(`${environment.host}/tickets`); // CAMBIAR
  }

  InsertarUser(user: User) {
    console.log('user', user);
    return this.http.post(`${this.url}/Registrar`, user);
  }

  modifyUser(user: User) {
    return this.http.put(`${this.url}/Modificar`, user);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<User[]>(
        `${this.url}/buscar`,
        texto.toLowerCase()
      );
    }
    return EMPTY;
  }

  ListarIdUser(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  getListaUser() {
    return this.listaUser.asObservable();
  }

  setListaUser(listaNuevaUser: User[]) {
    this.listaUser.next(listaNuevaUser);
  }


  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
