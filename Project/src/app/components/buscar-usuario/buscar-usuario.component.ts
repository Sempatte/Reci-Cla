import { User } from 'src/app/model/User';
import { Component, Input, OnInit } from '@angular/core';
import { RecicladorService } from 'src/app/service/reciclador.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css'],
})
export class BuscarUsuarioComponent implements OnInit {
  @Input() esReciclador: boolean = true;
  constructor(private rS: RecicladorService) {}

  ngOnInit(): void {}

  buscar(e: any) {
    if (e.target.value.length > 0) {
      this.rS.buscar(e.target.value).subscribe((data) => {
        this.rS.setListaUser(
          data.filter((e) => e['esReciclador'] === this.esReciclador)
        );
      });
    } else {
      if (this.esReciclador) {
        this.rS.getRecicladores().subscribe((data) => {
          this.rS.setListaUser(data);
        });
      } else {
        this.rS.getRecolectores().subscribe((data) => {
          this.rS.setListaUser(data);
        });
      }
    }
  }
}
