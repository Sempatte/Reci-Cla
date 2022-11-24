import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SolicitudService } from 'src/app/service/solicitud.service';

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
