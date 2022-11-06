import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, Type } from '@angular/core';
import { TypeOfUsuarioTsService } from 'src/app/service/type-of-reward.service';
import { Types } from 'src/app/model/Types';

@Component({
  selector: 'app-insertar-tipo-de-reward',
  templateUrl: './insertar-tipo-de-reward.component.html',
  styleUrls: ['./insertar-tipo-de-reward.component.css'],
})
export class InsertarTipoDeRewardComponent implements OnInit {
  types: Types = new Types();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;

  constructor(
    private tRS: TypeOfUsuarioTsService,
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

  aceptar(): void {
    if (this.types.Description.length > 0 && this.types.Name.length > 0) {
      if (this.edicion) {
        this.tRS.modifyTypeOfReward(this.types).subscribe((data) => {
          console.log(data);
          this.tRS.listarTypeOfReward().subscribe((data) => {
            this.tRS.setListaTypeOfReward(data);
          });
        });
      } else {
        this.tRS.listarTypeOfReward().subscribe((data) => { 
          this.types.id = data.length + 1; 
          this.tRS.insertarTypeOfReward(this.types).subscribe((data) => {
            console.log(data);
            this.tRS.listarTypeOfReward().subscribe((data) => {
              this.tRS.setListaTypeOfReward(data);
            });
          });
        })

      }

      this.router.navigate(['ListarTipoProductos']);
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }

  init() {
    if (this.edicion) {
      this.tRS.ListarIdTypeOfReward(this.id).subscribe((data) => {
        this.types = data;
      });
    }
  }
}
