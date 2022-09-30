import { RecicladorService } from 'src/app/service/reciclador.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioTsService } from 'src/app/service/lists.service';

@Component({
  selector: 'app-listar-ticket-reciclador',
  templateUrl: './listar-ticket-reciclador.component.html',
  styleUrls: ['./listar-ticket-reciclador.component.css'],
})
export class ListarTicketRecicladorComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'descripcion',
    'nombre',
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
