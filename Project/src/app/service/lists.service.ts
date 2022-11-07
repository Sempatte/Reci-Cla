import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reward } from '../model/Reward';
import { Rewards_Users } from '../model/Rewards_User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioTsService {
  private url: string = `${environment.host}/`;

  constructor(private http: HttpClient) {}

  getProducto() {
    return this.http.get<Reward[]>(`${this.url}reward`);
  }

  getTiposDeProductos() {
    return this.http.get<Reward[]>(`${this.url}types`);
  }

  getRewardsUser() {
    return this.http.get<Rewards_Users[]>(
      `${this.url}reward`
    );
  }


}
