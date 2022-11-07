import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { TipoDeTicketService } from 'src/app/service/tipo-de-ticket.service';
import { TipoTicket } from 'src/app/model/TipoTicket';

@Component({
  selector: 'app-insertar-tipo-de-ticket',
  templateUrl: './insertar-tipo-de-ticket.component.html',
  styleUrls: ['./insertar-tipo-de-ticket.component.css'],
})
export class InsertarTipoDeTicketComponent implements OnInit {
  tipoTicket: TipoTicket = new TipoTicket();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;

  constructor(
    private tipodeticketService: TipoDeTicketService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  init() {
    if (this.edicion) {
      this.tipodeticketService.ListarIdTipoDeTickets(this.id).subscribe((data) => {
        this.tipoTicket = data;
      });
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.tipoTicket.categoria.length > 0 && this.tipoTicket.descripcionCategoria.length > 0) {
      if (this.edicion) {
        this.tipodeticketService.modifyTipoDeTickets(this.tipoTicket).subscribe((data) => {
          console.log(data);
          this.tipodeticketService.listarTipoDeTickets().subscribe((data) => {
            this.tipodeticketService.setListaTipoDeTickets(data);
          });
        });
      } else {
        this.tipodeticketService.listarTipoDeTickets().subscribe((data) => { 
          this.tipoTicket.id = data.length + 1; 
          this.tipodeticketService.insertarTipoDeTickets(this.tipoTicket).subscribe((data) => {
            console.log(data);
            this.tipodeticketService.listarTipoDeTickets().subscribe((data) => {
              this.tipodeticketService.setListaTipoDeTickets(data);
            });
          });
        })

      }

      this.router.navigate(['ListarTipoDeTickets']);
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }
}
