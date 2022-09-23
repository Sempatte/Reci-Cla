import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Score } from '../model/Score';
import {Reward} from '../model/Reward'
import { Rewards_Users } from '../model/Rewards_User';
import { Ticket } from '../model/Ticket';


@Injectable({
  providedIn: 'root'
})
export class UsuarioTsService {

  url : string = 'http://localhost:5000/';


  constructor(private http: HttpClient) { }

  getListaRecicladores() {
    return this.http.get<User[]>(`${this.url}users`);
  }

  getScoresRecolectores() {
    return this.http.get<Score[]>(`${this.url}Scores?_expand=user`);
  }

  getHistorialXReciclador(nombre: string) {
    return this.http.get<any>(`${this.url}users?nombre=${nombre}&_embed=history`);
  }

  getProducto(){
    return this.http.get<Reward[]>(`${this.url}Rewards/?_expand=Type`);
  }

  getTiposDeProductos(){
    return this.http.get<Reward[]>(`${this.url}Types`);
  }

  getRewardsUser(){
    return this.http.get<Rewards_Users[]>(`${this.url}Reward_Users?_expand=user&_expand=Reward`);
  }

  getTicketRecicladores() {
    return this.http.get<Ticket[]>(`${this.url}Tickets?_expand=user`);
  }


}
