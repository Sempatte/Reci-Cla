import { MatTableDataSource } from '@angular/material/table';
import { TicketService } from 'src/app/service/ticket.service';
import { Ticket } from './../../../model/Ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-ticket-mayores-diciembre',
  templateUrl: './listar-ticket-mayores-diciembre.component.html',
  styleUrls: ['./listar-ticket-mayores-diciembre.component.css'],
})
export class ListarTicketMayoresDiciembreComponent implements OnInit {
  lista: Ticket[] = [];
  dataSource: MatTableDataSource<Ticket> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'descripcion',
    'categoriaTicket',
    'importancia',
    'nombre',
    'tipo_usuario',
    'email',
    'Estado',
    'fecha',
  ];

  constructor(private tS: TicketService) {}

  ngOnInit(): void {
    this.tS.getTicketsImportanciaAlta().subscribe((data) => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
