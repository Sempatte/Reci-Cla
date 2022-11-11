import { RecicladorService } from './../../../../service/reciclador.service';
import { User } from './../../../../model/User';
import { TipoDeTicketService } from 'src/app/service/tipo-de-ticket.service';
import { TicketService } from './../../../../service/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/Ticket';
import { TipoTicket } from 'src/app/model/TipoTicket';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-insertar-ticket',
  templateUrl: './insertar-ticket.component.html',
  styleUrls: ['./insertar-ticket.component.css'],
})
export class InsertarTicketComponent implements OnInit {
  ticket: Ticket = new Ticket();
  mensaje: string = '';
  edicion: boolean = false;

  listaTipoTickets: TipoTicket[] = [];
  listaUsuarios: User[] = [];

  idTipoTicketSeleccionado: number = 0;
  idUsuarioSeleccionado: number = 0;

  id: number = 0;

  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = '';

  constructor(
    private ticketService: TicketService,
    private ttsService: TipoDeTicketService,
    private usuarioService: RecicladorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {

      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.ttsService.listarTipoDeTickets().subscribe((data) => {
      this.listaTipoTickets = data;
    });
    this.usuarioService.getAllUsers().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }
  aceptar() {
    if (
      this.ticket.descripcionReclamo.length >= 0 &&
      this.idTipoTicketSeleccionado !== null &&
      this.idUsuarioSeleccionado != null &&
      this.ticket.estado.length >= 0 &&
      this.ticket.fecha.length >= 0
    ) {
      let _tipoticket = new TipoTicket();
      let _user = new User();

      _tipoticket.id = this.idTipoTicketSeleccionado;
      _user.id = this.idUsuarioSeleccionado;

      this.ticket.tipoTicket = _tipoticket;
      this.ticket.usuario = _user;

      this.ticket.fecha = moment(this.fechaSeleccionada).format(
        'YYYY-MM-DDTHH:mm:ss'
      );

      if (this.edicion) {
        this.ticketService.modifyTickets(this.ticket).subscribe(() => {
          this.ticketService.listarTickets().subscribe((data) => {
            this.ticketService.setListaTickets(data);
          });
        });
      } else {
        this.ticketService.insertarTickets(this.ticket).subscribe(() => {
          this.ticketService.listarTickets().subscribe((data) => {
            this.ticketService.setListaTickets(data);
          });
        });
      }
      this.router.navigate(['ListarTickets']);
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }
  init() {
    if (this.edicion) {
      console.log('a')
      this.ticketService.ListarIdTicket(this.id).subscribe((data) => {
        this.idTipoTicketSeleccionado = data.tipoTicket.id;
        this.idUsuarioSeleccionado = data.usuario.id;
        this.ticket = data;
      });
    }
  }
}
