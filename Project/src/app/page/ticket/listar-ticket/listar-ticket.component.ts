import { RecicladorService } from 'src/app/service/reciclador.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from 'src/app/model/Ticket';
import { TicketService } from 'src/app/service/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogoTicketComponent } from './dialogo-ticket/dialogo-ticket.component';
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
    'accionEditar',
    'accionEliminar'
  ];
  
  private idMayor:number=0;
  constructor(private tS:TicketService,public route:ActivatedRoute,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.tS.listarTickets().subscribe(data => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
    });

    this.tS.getListaTickets().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);      
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

  confirmarEliminacion(id: number) {
    console.log(id)
    this.idMayor = id;
    this.dialog.open(DialogoTicketComponent);
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
