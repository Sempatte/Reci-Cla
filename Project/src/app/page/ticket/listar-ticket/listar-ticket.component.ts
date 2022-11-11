import { RecicladorService } from 'src/app/service/reciclador.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from 'src/app/model/Ticket';
import { TicketService } from 'src/app/service/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listar-ticket',
  templateUrl: './listar-ticket.component.html',
  styleUrls: ['./listar-ticket.component.css'],
})
export class ListarTickets implements OnInit {
  lista:Ticket[]=[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'descripcion',
    'categoriaTicket',
    'importancia',
    'nombre',
    'tipo_usuario',
    'email',
    'Estado',
    'fecha',
    'acciones'
  ];
  isLoading: boolean = true;
  private idMayor:number=0;
  constructor(private tS:TicketService,public route:ActivatedRoute,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.tS.listarTickets().subscribe(data => {
      //this.lista = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });

    this.tS.getListaTickets().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      //console.log(data);
      this.isLoading = false;
    });

    this.tS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  eliminar(id:number){
    this.tS.eliminarTicket(id).subscribe(() => {
      this.tS.listarTickets().subscribe(data => {
        this.tS.setListaTickets(data);
      });
    });
  }
}
