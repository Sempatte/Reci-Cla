import { Score } from './../../../model/Score';
import { Component, OnInit } from '@angular/core';
import { UsuarioTsService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-listar-scores-recolector',
  templateUrl: './listar-scores-recolector.component.html',
  styleUrls: ['./listar-scores-recolector.component.css']
})
export class ListarScoresRecolectorComponent implements OnInit {

  dataSource: MatTableDataSource<Score> = new MatTableDataSource();
  displayedColumns: string[] = ['ScoreID','reciclador', 'pedidosRealizados' ,'pedidosEntregados', 'pedidosCancelados', 'nEstrellas'];

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
