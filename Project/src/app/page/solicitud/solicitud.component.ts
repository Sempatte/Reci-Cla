import { DialogoSolicitudComponent } from './dialogo-solicitud/dialogo-solicitud.component';
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
  displayedColumns:String[]=['id','usuario','Fecha','Lugar','Descripcion','accionEditar','accionEliminar']
  constructor(private sS:SolicitudService,public route:ActivatedRoute,private dialog:MatDialog) { }
  private idMayor:number=0;
  ngOnInit(): void {
    this.sS.listarSolicitud().subscribe(data=>{
      console.log(data)
      this.dataSource=new MatTableDataSource(data);
    });
    this.sS.getListaSolicitud().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.sS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
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
