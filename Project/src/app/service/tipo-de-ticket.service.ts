import { Ticket } from './../model/Ticket';
import { TipoTicket } from './../model/TipoTicket';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipoDeTicketService {
  private url: string = `${environment.host}/TipoTickets`;
  private confirmaEliminacion = new Subject<Boolean>();
  private listaCambio = new Subject<TipoTicket[]>();

  constructor(private http: HttpClient) {}

  listarTipoDeTickets() {
    return this.http.get<TipoTicket[]>(this.url);
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
    return this.http.put(this.url, tipoTicket);
  }

  ListarIdTipoDeTickets(id: number) {
    return this.http.get<TipoTicket>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }


  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<TipoTicket[]>(
        `${this.url}/buscar`,
        texto.toLowerCase()
      );
    }
    return EMPTY;
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  /**************** */
  getTickets_tipoTickets(){
    return this.http.get<Ticket[]>(`${environment.host}/tickets`);
  }
  
}
