import { Component, OnInit } from '@angular/core';
import { UsuarioTsService } from 'src/app/service/lists.service';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-listar-scores-reciclador',
  templateUrl: './listar-scores-reciclador.component.html',
  styleUrls: ['./listar-scores-reciclador.component.css']
})
export class ListarScoresRecicladorComponent implements OnInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['id','nombre' ,'pedidosRealizados' ,'pedidosEntregados', 'pedidosCancelados', 'nEstrellas'];

  constructor(private uS: UsuarioTsService) { }

  ngOnInit(): void {
    this.uS.getScoresRecolectores().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        console.log(data);
      }
    )
  }

}
