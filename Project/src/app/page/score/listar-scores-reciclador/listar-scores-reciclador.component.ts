import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ScoreService } from 'src/app/service/score.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogScoreComponent } from '../dialog-score/dialog-score.component';

@Component({
  selector: 'app-listar-scores-reciclador',
  templateUrl: './listar-scores-reciclador.component.html',
  styleUrls: ['./listar-scores-reciclador.component.css'],
})
export class ListarScoresRecicladorComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  private idMayor: number = 0;
  displayedColumns: string[] = [
    'id',
    'nombre',
    'pedidosRealizados',
    'pedidosEntregados',
    'pedidosCancelados',
    'nEstrellas',
    'accion_editar',
    'accion_eliminar',
  ];

  constructor(
    private scoreService: ScoreService,
    public route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.scoreService.listarScores().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.scoreService.getListaScore().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.scoreService.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmarEliminacion(id: number) {
    console.log(id)
    this.idMayor = id;
    this.dialog.open(DialogScoreComponent);
  }

  eliminar(id: number) {
    this.scoreService.eliminar(id).subscribe(() => {
      this.scoreService.listarScores().subscribe((data) => {
        this.scoreService.setListaScore(data);
      });
    });
  }

  
}
