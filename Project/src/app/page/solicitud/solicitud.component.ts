import { SolicitudService } from './../../service/solicitud.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns:String[]=['id','usuario','Fecha','Lugar','Descripcion']
  constructor(private sS:SolicitudService,public route:ActivatedRoute,private dialog:MatDialog) { }
  private idMayor:number=0;
  ngOnInit(): void {
    this.sS.listarSolicitud().subscribe(data=>{
      console.log(data)
      this.dataSource=new MatTableDataSource(data);
    });
    this.sS.getListaSolicitud().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
