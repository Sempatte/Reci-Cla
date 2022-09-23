import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UbicacionService} from './../../../service/ubicacion.service';
import {Ubication} from 'src/app/model/Ubication';

@Component({
  selector: 'app-insertar-ubication',
  templateUrl: './insertar-ubication.component.html',
  styleUrls: ['./insertar-ubication.component.css']
})
export class InsertarUbicationComponent implements OnInit {

    ubication: Ubication = new Ubication();
    mensaje: string = "";
  constructor(private UbicacionService: UbicacionService,private router: Router) { }


  ngOnInit(): void {
  }

   aceptarUbication(): void {
    if (this.ubication.Direccion.length > 0 && this.ubication.Direccion.length > 0) {

      this.UbicacionService.InsertarUbication(this.ubication).subscribe(data => {
        this.UbicacionService.getUbication().subscribe(data => {
          this.UbicacionService.setListaUbication(data);
        })
      })
      this.router.navigate(['ListarUbicacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
}
