import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Ubication } from 'src/app/model/Ubication';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { ActivatedRoute } from '@angular/router';
import { DialogUbicationComponent } from './dialog-ubication/dialog-ubication.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.component.html',
  styleUrls: ['./ubication.component.css'],
})
export class UbicationComponent implements OnInit {
  DataSource: MatTableDataSource<Ubication> = new MatTableDataSource();
  listaUbication: Ubication[] = [];
  private idMayor: number = 0;

  displayedColumns: string[] = [
    'idUbication',
    'Departamento',
    'Provincia',
    'Distrito',
    'Direccion',
    'accion_editar',
    'accion_eliminar'
  ];

  constructor(private ubS: UbicacionService, public route: ActivatedRoute, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.ubS.getUbications().subscribe((data) => {
      this.DataSource = new MatTableDataSource(data);
    });

    this.ubS.getListaUbication().subscribe((data) => {
      this.DataSource = new MatTableDataSource(data);
    });

    this.ubS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogUbicationComponent);
  }

  eliminar(id: number) {
    this.ubS.eliminar(id).subscribe(() => {
      this.ubS.getUbications().subscribe(data => {
        this.ubS.setListaUbication(data);
      });
    });

  }
  filtrar(e: any) {
    this.DataSource.filter = e.target.value.trim();
  }
}
