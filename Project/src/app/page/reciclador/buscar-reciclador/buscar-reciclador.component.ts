import { User } from 'src/app/model/User';
import { Component, OnInit } from '@angular/core';
import { RecicladorService } from 'src/app/service/reciclador.service';

@Component({
  selector: 'app-buscar-reciclador',
  templateUrl: './buscar-reciclador.component.html',
  styleUrls: ['./buscar-reciclador.component.css'],
})
export class BuscarRecicladorComponent implements OnInit {
  constructor(private rS: RecicladorService) {}
  textoBuscar: string = '';
  ngOnInit(): void {}

  buscar(_e: any) {
    let array: User[] = [];
    this.rS.getRecicladores().subscribe((data) => {

      array = data.filter(
        (e) =>
          e['nombre'].includes(_e.target.value) ||
          e['apellido'].includes(_e.target.value)||
          e['dni'].includes(_e.target.value) ||
          e['email'].includes(_e.target.value)||
          e['telefono'].includes(_e.target.value)
      );

      this.rS.setListaUser(array);
    });
  }
}
