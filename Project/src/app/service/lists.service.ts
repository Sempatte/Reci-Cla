import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reward } from '../model/Reward';
import { Rewards_Users } from '../model/Rewards_User';


@Injectable({
  providedIn: 'root',
})
export class UsuarioTsService {
  url: string = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

  getProducto() {
    return this.http.get<Reward[]>(`${this.url}Rewards/?_expand=Type`);
  }

  getTiposDeProductos() {
    return this.http.get<Reward[]>(`${this.url}Types`);
  }

  getRewardsUser() {
    return this.http.get<Rewards_Users[]>(
      `${this.url}Reward_Users?_expand=user&_expand=Reward`
    );
  }


}
