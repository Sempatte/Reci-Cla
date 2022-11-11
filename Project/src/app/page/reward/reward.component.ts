import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioTsService } from 'src/app/service/lists.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogoRewardComponent } from './dialogo-reward/dialogo-reward.component';
import { RewardService } from 'src/app/service/reward.service';
@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css'],
})
export class RewardComponent implements OnInit {
  DataSource: MatTableDataSource<any> = new MatTableDataSource();
  private idMayor: number = 0;
  DisplayedColumns: String[] = [
    'id',
    'name',
    'TipoProducto',
    'FechaInicio',
    'FechaFin',
    'accion_editar',
    'accionEliminar'
  ];

  constructor(private us: RewardService, public route: ActivatedRoute,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.us.listarRewards().subscribe((data) => {
      this.DataSource = new MatTableDataSource(data);
      console.log(data);
    });

    this.us.getListaRewards().subscribe((data) => {
      this.DataSource = new MatTableDataSource(data);
    });

    this.us.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    
  }
  confirmarEliminacion(id: number) {
    console.log(id)
    this.idMayor = id;
    this.dialog.open(DialogoRewardComponent);
  }

  eliminar(id: number){
    this.us.eliminarReward(id).subscribe(() => {
      this.us.listarRewards().subscribe((data) => {
        this.us.setListaRewards(data);
      });
    });
  }
  filtrar(e: any) {
    this.DataSource.filter = e.target.value.trim();
  }
}
