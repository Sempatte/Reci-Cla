import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Ubication } from 'src/app/model/Ubication';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.component.html',
  styleUrls: ['./ubication.component.css'],
})
export class UbicationComponent implements OnInit {
  DataSource: MatTableDataSource<Ubication> = new MatTableDataSource();
  listaUbication: Ubication[] = [];

  displayedColumns: string[] = [
    'idUbication',
    'Departamento',
    'Provincia',
    'Distrito',
    'Direccion',
    'acciones',
  ];

  constructor(private ubS: UbicacionService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.ubS.getUbications().subscribe((data) => {
      this.DataSource = new MatTableDataSource(data);
    });

    this.ubS.getListaUbication().subscribe((data) => {
      this.DataSource = new MatTableDataSource(data);
    });
  }
}
