import { RecicladorService } from 'src/app/service/reciclador.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-ticket',
  templateUrl: './listar-ticket.component.html',
  styleUrls: ['./listar-ticket.component.css'],
})
export class ListarTickets implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
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
  isLoading: boolean = true;

  constructor(private rS: RecicladorService) {}

  ngOnInit(): void {
    this.rS.getTicketRecicladores().subscribe((data) => {
      console.info(data);
      this.dataSource = new MatTableDataSource(data);
      this.isLoading = false;
    });
  }
}
