
import { Router } from '@angular/router';
import { Component, OnInit, Type } from '@angular/core';
import { TypeOfRewardService } from 'src/app/service/type-of-reward.service';
import { Types } from 'src/app/model/Types';

@Component({
  selector: 'app-insertar-tipo-de-reward',
  templateUrl: './insertar-tipo-de-reward.component.html',
  styleUrls: ['./insertar-tipo-de-reward.component.css']
})
export class InsertarTipoDeRewardComponent implements OnInit {

  types: Types = new Types();
  mensaje: string = "";

  constructor(private tRS : TypeOfRewardService, private router: Router) {

   }

  ngOnInit(): void {
  }

  aceptar(): void {
    if (this.types.Description.length > 0 && this.types.Name.length > 0 ) {
      this.tRS.insertarTypeOfReward(this.types).subscribe(data => {
        console.log(data);
        this.tRS.listarTypeOfReward().subscribe(data => {
          this.tRS.setListaTypeOfReward(data);
        })
    })
    this.router.navigate(['ListarTipoProductos']);
    }
    else {
      this.mensaje = "Complete los valores requeridos";
    }

  }
}
