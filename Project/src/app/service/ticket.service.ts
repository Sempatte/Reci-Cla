import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ticket } from '../model/Ticket';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url:string=`${environment.host}/tickets`
  private listaCambio=new Subject<Ticket[]>()
  private confirmaEliminacion=new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listarTickets(){
    return this.http.get<Ticket[]>(this.url);
  }
  insertarTickets(tick:Ticket){
    return this.http.post(this.url,tick);
  }
  modifyTickets(tick:Ticket){
    return this.http.put(this.url,tick);
  }
  eliminarTicket(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto:string){
    return this.http.post<Ticket[]>(`${this.url}/buscar`,texto);
  }
  ListarIdTicket(id:number){
    return this.http.get<Ticket>(`${this.url}/${id}`);
  }
  getListaTickets(){
    return this.listaCambio.asObservable();
  }
  setListaTickets(listaNueva:Ticket[]){
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado:Boolean){
    this.confirmaEliminacion.next(estado);
  }
}
