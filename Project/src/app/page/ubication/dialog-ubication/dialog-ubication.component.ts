import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ubication',
  templateUrl: './dialog-ubication.component.html',
  styleUrls: ['./dialog-ubication.component.css']
})
export class DialogUbicationComponent implements OnInit {

  constructor(
    private ubS: UbicacionService,
    private dialogRef: MatDialogRef<DialogUbicationComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.ubS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
