import { Component, OnInit } from '@angular/core';
import { UsuarioTsService} from 'src/app/service/usuario.service';
@Component({
  selector: 'app-reciclador',
  templateUrl: './reciclador.component.html',
  styleUrls: ['./reciclador.component.css']
})
export class RecicladorComponent implements OnInit {

  constructor(private uS: UsuarioTsService) { }

  ngOnInit(): void {
    this.uS.getListaRecicladores().subscribe(data => {
      console.log(data);
    })
  }

}
