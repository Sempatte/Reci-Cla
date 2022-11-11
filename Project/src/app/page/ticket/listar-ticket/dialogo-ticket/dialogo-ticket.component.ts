import { Component, OnInit } from '@angular/core';
import { TicketService } from './../../../../service/ticket.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogo-ticket',
  templateUrl: './dialogo-ticket.component.html',
  styleUrls: ['./dialogo-ticket.component.css']
})
export class DialogoTicketComponent implements OnInit {

  constructor(private ticketService: TicketService, private dialogRef: MatDialogRef<DialogoTicketComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.ticketService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
