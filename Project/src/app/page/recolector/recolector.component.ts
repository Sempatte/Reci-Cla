import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RecicladorService } from 'src/app/service/reciclador.service';
import { User } from 'src/app/model/User';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-recolector',
  templateUrl: './recolector.component.html',
  styleUrls: ['./recolector.component.css'],
})
export class RecolectorComponent implements OnInit {
  isLoading: boolean = true;
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  listaRecolectores: any = [];
  public esReciclador: boolean = false;
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
    this.rS.getRecolectores().subscribe((data) => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
    });

    this.rS.getListaUser().subscribe((data) => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
    });

    this.rS.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogComponent);
  }

  eliminar(id: number) {
    this.rS.eliminar(id).subscribe(() => {
      this.rS.getRecolectores().subscribe((data) => {
        this.rS.setListaUser(data);
      });
    });
  }
}
