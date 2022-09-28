import { RecicladorService } from 'src/app/service/reciclador.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private rS : RecicladorService, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.rS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
