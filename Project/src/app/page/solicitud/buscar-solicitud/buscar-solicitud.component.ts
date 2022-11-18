import { SolicitudService } from './../../../service/solicitud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-solicitud',
  templateUrl: './buscar-solicitud.component.html',
  styleUrls: ['./buscar-solicitud.component.css']
})
export class BuscarSolicitudComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private sS:SolicitudService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {/* buscar a BD */
  this.sS.buscar(e.target.value).subscribe(data=>{
    this.sS.setListaSolicitud(data);
  });
}
}
