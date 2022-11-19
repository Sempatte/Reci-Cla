import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Subject, EMPTY } from 'rxjs';
import { Score } from '../model/Score';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RecicladorService {
  private token = sessionStorage.getItem('token');
  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  private url: string = `${environment.host}/usuarios`;
  private listaUser = new Subject<User[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  getAllUsers() {
    return this.http.get<User[]>(this.url, {
      headers: this.headers,
    });
  }

  getRecicladores() {
    return this.http.get<User[]>(`${this.url}/ListarRecicladores`, {
      headers: this.headers,
    });
  }

  getRecolectores() {
    return this.http.get<User[]>(`${this.url}/ListarRecolectores`, {
      headers: this.headers,
    });
  }

  getScoresRecolectores() {
    return this.http.get<Score[]>(`${environment.host}/scores`, {
      headers: this.headers,
    }); 
  }

  getTicketRecicladores() {
    return this.http.get<Score[]>(`${environment.host}/tickets`, {
      headers: this.headers,
    }); 
  }

  InsertarUser(user: User) {
    console.log('user', user);
    return this.http.post(`${this.url}/Registrar`, user, {
      headers: this.headers,
    });
  }

  modifyUser(user: User) {
    return this.http.put(`${this.url}/Modificar`, user, {
      headers: this.headers,
    });
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }

  buscar(texto: string) {
    if (texto.length != 0) {
      return (
        this.http.post<User[]>(`${this.url}/buscar`, texto.toLowerCase()),
        {
          headers: new HttpHeaders()
            .set('Authorization', `Bearer ${this.token}`)
            .set('Content-Type', 'application/json'),
        }
      );
    }
    return EMPTY;
  }

  ListarIdUser(id: number) {
    return this.http.get<User>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.token}`)
        .set('Content-Type', 'application/json'),
    });
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
