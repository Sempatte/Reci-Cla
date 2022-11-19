import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ticket } from '../model/Ticket';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private url: string = `${environment.host}/tickets`;
  private token = sessionStorage.getItem('token');
  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json');
  private listaCambio = new Subject<Ticket[]>();
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http: HttpClient) {}

  listarTickets() {
    return this.http.get<Ticket[]>(this.url, {
      headers: this.headers,
    });
  }
  insertarTickets(tick: Ticket) {
    return this.http.post(this.url, tick, {
      headers: this.headers,
    });
  }
  modifyTickets(tick: Ticket) {
    return this.http.put(this.url, tick, {
      headers: this.headers,
    });
  }
  eliminarTicket(id: number) {
    return this.http.delete(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }
  buscar(texto: string) {
    return this.http.post<Ticket[]>(`${this.url}/buscar`, texto, {
      headers: this.headers,
    });
  }
  ListarIdTicket(id: number) {
    return this.http.get<Ticket>(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }
  getListaTickets() {
    return this.listaCambio.asObservable();
  }
  setListaTickets(listaNueva: Ticket[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
