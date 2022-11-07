import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { Ubication } from 'src/app/model/Ubication';
@Component({
  selector: 'app-buscar-ubication',
  templateUrl: './buscar-ubication.component.html',
  styleUrls: ['./buscar-ubication.component.css']
})
export class BuscarUbicationComponent implements OnInit {

  constructor(private uB: UbicacionService) { }

  ngOnInit(): void {
  }

  buscar(_e: any) {
    let array: Ubication[] = [];
    this.uB.getUbications().subscribe((data) => {

      array = data.filter(
        (e) =>
          e['direccion'].toLowerCase().includes(_e.target.value.toLowerCase()) ||
          e['distrito'].toLowerCase().includes(_e.target.value.toLowerCase()) ||
          e['provincia'].toLowerCase().includes(_e.target.value.toLowerCase())
      );

      this.uB.setListaUbication(array);
    });
  }

}
