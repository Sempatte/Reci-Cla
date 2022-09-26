import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { RecicladorService } from 'src/app/service/reciclador.service';
import { User } from 'src/app/model/User';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-reciclador',
  templateUrl: './reciclador.component.html',
  styleUrls: ['./reciclador.component.css'],
})
export class RecicladorComponent implements OnInit {
  isLoading: boolean = true;
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  listaRecicladores: any = [];
  private idMayor: number = 0;
  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'email',
    'telefono',
    'dni',
    'accionEditar',
    'accionEliminar',
  ];

  constructor(
    private rS: RecicladorService,
    public route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.rS.getUsers().subscribe((data) => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data);
    });

    this.rS.getListaUser().subscribe((data) => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data);
    });

    this.rS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogComponent);
  }

  eliminar(id: number) {
    this.rS.eliminar(id).subscribe(() => {
      this.rS.getUsers().subscribe(data => {
        this.rS.setListaUser(data);
      });
    });

  }

}
