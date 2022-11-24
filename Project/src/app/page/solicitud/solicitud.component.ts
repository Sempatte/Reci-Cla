import { DialogoSolicitudComponent } from './dialogo-solicitud/dialogo-solicitud.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns:String[]=['id','usuario','Fecha','Lugar','Descripcion','accionEditar','accionEliminar'];
  private idMayor:number=0;
  constructor(private sS:SolicitudService,public route:ActivatedRoute,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.sS.listarSolicitud().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.sS.getListaSolicitud().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.sS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  eliminar(id:number){
    this.sS.eliminarSolicitud(id).subscribe(() => {
      this.sS.listarSolicitud().subscribe(data => {
        this.sS.setListaSolicitud(data);
      });
    });
  }

  confirmarEliminacion(id: number) {
    console.log(id)
    this.idMayor = id;
    this.dialog.open(DialogoSolicitudComponent);
  }
}
