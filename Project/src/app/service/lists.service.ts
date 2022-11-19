import { Ubication } from './../model/Ubication';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reward } from '../model/Reward';
import { Rewards_Users } from '../model/Rewards_User';
import { environment } from 'src/environments/environment';
import Historial from '../model/Historial';

@Injectable({
  providedIn: 'root',
})
export class UsuarioTsService {
  private token = sessionStorage.getItem('token');
  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json');
  private url: string = `${environment.host}/`;

  constructor(private http: HttpClient) {}

  getProducto() {
    return this.http.get<Reward[]>(`${this.url}reward`, {
      headers: this.headers,
    });
  }

  getTiposDeProductos() {
    return this.http.get<Reward[]>(`${this.url}types`, {
      headers: this.headers,
    });
  }

  getRewardsUser() {
    return this.http.get<Rewards_Users[]>(`${this.url}reward`, {
      headers: this.headers,
    });
  }

  getHistorial() {
    return this.http.get<Historial[]>(`${this.url}historial`, {
      headers: this.headers,
    });
  }

  getUbicaciones() {
    return this.http.get<Ubication[]>(`${this.url}ubications`);
  }
}
