import { TicketService } from 'src/app/service/ticket.service';
import { Ticket } from './../../../model/Ticket';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tickets-importantes',
  templateUrl: './listar-tickets-importantes.component.html',
  styleUrls: ['./listar-tickets-importantes.component.css'],
})
export class ListarTicketsImportantesComponent implements OnInit {
  dataSource: MatTableDataSource<Ticket> = new MatTableDataSource<Ticket>();
  displayedColumns: string[] = [
    'id',
    'Fecha',
    'DescripcionReclamo',
    'Estado',
    'Categoria',
    'DescripcionCategoria',
    'NombreUsuario',
    'TipoUsuario'
  ];
  constructor(private ticketService:TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTicketsImportanciaAlta().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Ticket>(data);
    } );
  }
}
