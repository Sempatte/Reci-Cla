import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import {Reward} from 'src/app/model/Reward'
@Injectable({
  providedIn: 'root'
})
export class RewardService {
  private url:string=`${environment.host}/reward`
  private listaCambio=new Subject<Reward[]>()
  private confirmaEliminacion=new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listarRewards(){
    return this.http.get<Reward[]>(this.url);
  }
  insertarRewards(rew:Reward){
    return this.http.post(this.url,rew);
  }
  modifyRewards(rew:Reward){
    return this.http.put(this.url,rew);
  }
  eliminarReward(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto:string){
    return this.http.post<Reward[]>(`${this.url}/buscar`,texto);
  }
  ListarIdReward(id:number){
    return this.http.get<Reward>(`${this.url}/${id}`);
  }
  getListaRewards(){
    return this.listaCambio.asObservable();
  }
  setListaRewards(listaNueva:Reward[]){
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado:Boolean){
    this.confirmaEliminacion.next(estado);
  }
}
