import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UbicacionService } from './../../../service/ubicacion.service';
import { Ubication } from 'src/app/model/Ubication';

@Component({
  selector: 'app-insertar-ubication',
  templateUrl: './insertar-ubication.component.html',
  styleUrls: ['./insertar-ubication.component.css'],
})
export class InsertarUbicationComponent implements OnInit{
  ubication: Ubication =  new Ubication();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;
  constructor(
    private UbicacionService: UbicacionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptarUbication(): void {
    if (
      this.ubication.Direccion.length > 0 &&
      this.ubication.Direccion.length > 0
    ) {
      if (this.edicion) {
        this.UbicacionService.modifyUbication(this.ubication).subscribe(
          (data) => {
            this.UbicacionService.getUbication().subscribe((data) => {
              this.UbicacionService.setListaUbication(data);
            });
          }
        );
      } else {
        this.UbicacionService.InsertarUbication(this.ubication).subscribe(
          (data) => {
            this.UbicacionService.getUbication().subscribe((data) => {
              this.UbicacionService.setListaUbication(data);
            });
          }
        );
      }

      this.router.navigate(['ListarUbicacion']);
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }

  init() {
    if (this.edicion) {
      this.UbicacionService.ListarIdUbication(this.id).subscribe((data) => {
        this.ubication = data;
      });
    }
  }
}
