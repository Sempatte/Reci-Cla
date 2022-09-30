import { Component, OnInit } from '@angular/core';
import { TipoDeTicketService } from 'src/app/service/tipo-de-ticket.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-ticket-dialogo',
  templateUrl: './tipo-ticket-dialogo.component.html',
  styleUrls: ['./tipo-ticket-dialogo.component.css'],
})
export class TipoTicketDialogoComponent implements OnInit {
  constructor(
    private tipoticketService: TipoDeTicketService,
    private dialogRef: MatDialogRef<TipoTicketDialogoComponent>
  ) {}

  ngOnInit(): void {}

  confirmar(estado: boolean) {
    this.tipoticketService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
