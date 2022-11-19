import { Component, OnInit } from '@angular/core';
import { TipoDeTicketService } from 'src/app/service/tipo-de-ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TipoTicketDialogoComponent } from './tipo-ticket-dialogo/tipo-ticket-dialogo.component';

@Component({
  selector: 'app-tipo-de-ticket',
  templateUrl: './tipo-de-ticket.component.html',
  styleUrls: ['./tipo-de-ticket.component.css'],
})
export class TipoDeTicketComponent implements OnInit {
  DataSource: MatTableDataSource<any> = new MatTableDataSource();
  isLoading: boolean = true;
  DisplayedColumns: String[] = [
    'id',
    'DescripcionCategoria',
    'Categoria',
    'Importancia',
    'accion_eliminar',
    'accion_editar',
  ];
  private idMayor: number = 0;
  constructor(
    private TipoTicketService: TipoDeTicketService,
    public route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.TipoTicketService.listarTipoDeTickets().subscribe((data) => {
      this.isLoading = false;
      this.DataSource = new MatTableDataSource(data);
    });

    this.TipoTicketService.getListaTipoDeTickets().subscribe((data) => {
      this.isLoading = false;
      this.DataSource = new MatTableDataSource(data);
    });
    this.TipoTicketService.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TipoTicketDialogoComponent);
  }

  eliminar(id: number) {
    this.TipoTicketService.eliminar(id).subscribe(() => {
      this.TipoTicketService.listarTipoDeTickets().subscribe((data) => {
        this.TipoTicketService.setListaTipoDeTickets(data);
      });
    });
  }
}
