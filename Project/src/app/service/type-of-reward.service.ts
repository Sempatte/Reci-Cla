import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Types } from '../model/Types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeOfRewardService {

  url : string = 'http://localhost:5000/Types';
  private listaCambio = new Subject<Types[]>()

  constructor(private http: HttpClient) { }

  listarTypeOfReward(){
    return this.http.get<Types[]>(this.url);
  }

  insertarTypeOfReward(types: Types){
    return this.http.post(this.url, types)
  }

  setListaTypeOfReward(listaNueva : Types[]){
    this.listaCambio.next(listaNueva)
  }

  getListaTypeOfReward(){
    return this.listaCambio.asObservable()
  }
}
