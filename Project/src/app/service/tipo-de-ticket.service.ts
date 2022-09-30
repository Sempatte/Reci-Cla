import { TipoTicket } from './../model/TipoTicket';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDeTicketService {
  url: string = 'http://localhost:5000/TipoTickets';
  private confirmaEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<TipoTicket[]>();

  constructor(private http: HttpClient) { }

  listarTipoDeTickets() {
    return this.http.get<TipoTicket[]>(this.url)
  }

  insertarTipoDeTickets(tipoTicket: TipoTicket) {
    return this.http.post(this.url, tipoTicket);
  }

  setListaTipoDeTickets(listaNueva: TipoTicket[]) {
    this.listaCambio.next(listaNueva);
  }

  getListaTipoDeTickets() {
    return this.listaCambio.asObservable();
  }

  modifyTipoDeTickets(tipoTicket: TipoTicket) {
    return this.http.put(this.url + '/' + tipoTicket.id, tipoTicket);
  }

  ListarIdTipoDeTickets(id: number) {
    return this.http.get<TipoTicket>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
