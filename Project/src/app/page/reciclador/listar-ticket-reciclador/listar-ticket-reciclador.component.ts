import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioTsService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listar-ticket-reciclador',
  templateUrl: './listar-ticket-reciclador.component.html',
  styleUrls: ['./listar-ticket-reciclador.component.css']
})
export class ListarTicketRecicladorComponent implements OnInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['id','descripcion' ,'nombre' ,'fecha'];

  constructor(private uS: UsuarioTsService) { }

  ngOnInit(): void {
    this.uS.getTicketRecicladores().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        console.log(data);
      }
    )
  }

}
