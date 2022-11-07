import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RecicladorService } from 'src/app/service/reciclador.service';
import { User } from 'src/app/model/User';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-reciclador',
  templateUrl: './reciclador.component.html',
  styleUrls: ['./reciclador.component.css'],
})
export class RecicladorComponent implements  OnInit {
  isLoading: boolean = true;
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  listaRecicladores: any = [];
  public esReciclador : boolean = true;

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

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private rS: RecicladorService,
    public route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.rS.getRecicladores().subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
    });

    this.rS.getListaUser().subscribe((data) => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
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
      this.rS.getRecicladores().subscribe(data => {
        this.rS.setListaUser(data);
      });
    });

  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }


}
