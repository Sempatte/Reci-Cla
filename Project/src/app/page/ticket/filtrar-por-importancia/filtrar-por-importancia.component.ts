import { User } from './../../../model/User';
import { TicketService } from './../../../service/ticket.service';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from './../../../model/Ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtrar-por-importancia',
  templateUrl: './filtrar-por-importancia.component.html',
  styleUrls: ['./filtrar-por-importancia.component.css'],
})
export class FiltrarPorImportanciaComponent implements OnInit {
  lista: User[] = [];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'email',
    'telefono',
    'dni',
  ];

  constructor(private tS: TicketService) {}

  ngOnInit(): void {
    this.tS.getTicketsPorImportancia().subscribe((data) => {
      console.log(data)
      this.dataSource = new MatTableDataSource<User>(data);
    });
  }
}
