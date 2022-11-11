import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/Ticket';
import { TipoTicket } from 'src/app/model/TipoTicket';
import * as moment from 'moment';
@Component({
  selector: 'app-insertar-ticket',
  templateUrl: './insertar-ticket.component.html',
  styleUrls: ['./insertar-ticket.component.css'],
})
export class InsertarTicketComponent implements OnInit {
  ticket: Ticket = new Ticket();
  id: number = 0;
  edicion: boolean = false;
  listaTipoTickets: TipoTicket[] = [];
  idTipoTicketSeleccionado: number = 0;
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = '';

  constructor() {}

  ngOnInit(): void {}
}
