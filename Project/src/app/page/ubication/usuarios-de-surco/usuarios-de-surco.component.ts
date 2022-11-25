
import { MatTableDataSource } from '@angular/material/table';
import { Ubication } from './../../../model/Ubication';
import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/service/ubicacion.service';

@Component({
  selector: 'app-usuarios-de-surco',
  templateUrl: './usuarios-de-surco.component.html',
  styleUrls: ['./usuarios-de-surco.component.css']
})
export class UsuariosDeSurcoComponent implements OnInit {
  lista: Ubication[] = [];
  dataSource: MatTableDataSource<Ubication> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'nombre',
    'ubicacion',
    'dni'
  ];
  constructor(private uService: UbicacionService ) { }

  ngOnInit(): void {
    this.uService.getUsuariosDeSurco().subscribe((data) => {
      console.log(data)
      this.dataSource = new MatTableDataSource<Ubication>(data);
    });
  }

}
