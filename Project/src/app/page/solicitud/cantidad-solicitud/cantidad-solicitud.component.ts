import { SolicitudService } from 'src/app/service/solicitud.service';
import { RespuestaSolicitud } from './../../../model/RespuestaSolicitud';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cantidad-solicitud',
  templateUrl: './cantidad-solicitud.component.html',
  styleUrls: ['./cantidad-solicitud.component.css']
})
export class CantidadSolicitudComponent implements OnInit {
  dataSource: MatTableDataSource<RespuestaSolicitud> = new MatTableDataSource();
  displayedColumns: string[] = ['distrito', 'cantidad'];
  constructor(private vS:SolicitudService) { }

  ngOnInit(): void {
    this.vS.cantidadsolicitudes().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
