import { SolicitudService } from './../../../service/solicitud.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-solicitud',
  templateUrl: './dialogo-solicitud.component.html',
  styleUrls: ['./dialogo-solicitud.component.css']
})
export class DialogoSolicitudComponent implements OnInit {

  constructor(private sS: SolicitudService, private dialogRef: MatDialogRef<DialogoSolicitudComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.sS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
