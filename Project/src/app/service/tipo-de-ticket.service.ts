import { Ticket } from './../model/Ticket';
import { TipoTicket } from './../model/TipoTicket';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipoDeTicketService {
  private url: string = `${environment.host}/TipoTickets`;
  private token = sessionStorage.getItem('token');
  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json');
  private confirmaEliminacion = new Subject<Boolean>();
  private listaCambio = new Subject<TipoTicket[]>();

  constructor(private http: HttpClient) {}

  listarTipoDeTickets() {
    return this.http.get<TipoTicket[]>(this.url, {
      headers: this.headers,
    });
  }

  insertarTipoDeTickets(tipoTicket: TipoTicket) {
    return this.http.post(this.url, tipoTicket, {
      headers: this.headers,
    });
  }

  setListaTipoDeTickets(listaNueva: TipoTicket[]) {
    this.listaCambio.next(listaNueva);
  }

  getListaTipoDeTickets() {
    return this.listaCambio.asObservable();
  }

  modifyTipoDeTickets(tipoTicket: TipoTicket) {
    return this.http.put(this.url, tipoTicket, {
      headers: this.headers,
    });
  }

  ListarIdTipoDeTickets(id: number) {
    return this.http.get<TipoTicket>(`${this.url}/${id}`, {
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
      return this.http.post<TipoTicket[]>(
        `${this.url}/buscar`,
        texto.toLowerCase(),
        {
          headers: this.headers,
        }
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
  getTickets_tipoTickets() {
    return this.http.get<Ticket[]>(`${environment.host}/tickets`, {
      headers: this.headers,
    });
  }
}
