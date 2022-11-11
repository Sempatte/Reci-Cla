import { Component, OnInit } from '@angular/core';
import { TicketService } from './../../../../service/ticket.service';
@Component({
  selector: 'app-buscar-ticket',
  templateUrl: './buscar-ticket.component.html',
  styleUrls: ['./buscar-ticket.component.css']
})
export class BuscarTicketComponent implements OnInit {
  textoBuscar:string="";
  constructor(ticketService:TicketService) { }

  ngOnInit(): void {
  }
  /*buscar(e: any) {
  this.ticketService.buscar(e.target.value).subscribe(data=>{
    this.ticketService.setLista(data);
  });
}*/

}
