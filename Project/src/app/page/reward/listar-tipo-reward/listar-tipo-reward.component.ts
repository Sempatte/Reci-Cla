import { TypeOfUsuarioTsService } from 'src/app/service/type-of-reward.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TipoRewardDialogoComponent } from './tipo-reward-dialogo/tipo-reward-dialogo.component';
@Component({
  selector: 'app-listar-tipo-reward',
  templateUrl: './listar-tipo-reward.component.html',
  styleUrls: ['./listar-tipo-reward.component.css'],
})
export class ListarTipoRewardComponent implements OnInit {
  DataSource: MatTableDataSource<any> = new MatTableDataSource();

  DisplayedColumns: String[] = ['id', 'nameType', 'description', 'accion1','accion2'];
  private idMayor: number=0;
  constructor(private tUs: TypeOfRewardService, public route: ActivatedRoute,private dialog:MatDialog) {}


  ngOnInit(): void {
    this.tUs.listarTypeOfReward().subscribe((data) => {
      console.log(data);
      this.DataSource = new MatTableDataSource(data);
    });

    this.tUs.getListaTypeOfReward().subscribe((data) => {
      console.log(data);
      this.DataSource = new MatTableDataSource(data);
    });
    this.tUs.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TipoRewardDialogoComponent);
  }

  eliminar(id: number) {
    this.tUs.eliminar(id).subscribe(() => {
      this.tUs.listarTypeOfReward().subscribe((data) => {
        this.tUs.setListaTypeOfReward(data);
      });
    });
  }

  filtrar(e: any) {
    this.DataSource.filter = e.target.value.trim();
  }
}
