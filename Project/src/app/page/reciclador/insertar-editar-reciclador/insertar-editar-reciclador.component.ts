import { RecicladorService } from './../../../service/reciclador.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-insertar-editar-reciclador',
  templateUrl: './insertar-editar-reciclador.component.html',
  styleUrls: ['./insertar-editar-reciclador.component.css']
})
export class InsertarEditarRecicladorComponent implements OnInit {

  user: User = new User();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;

  constructor( 
    private rS: RecicladorService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
    }



    aceptarModInsUsuario() {

      if (
        this.user.nombre.length > 0 &&
        this.user.apellido.length > 0 &&
        this.user.email.length > 0 &&
        this.user.telefono.length > 0 && 
        this.user.dni.length > 0
      ) {
        if (this.edicion) {
          this.rS.modifyUser(this.user).subscribe((data) => {
            this.rS.getUsers().subscribe((data) => {
              this.rS.setListaUser(data);
            });
          });
        } else {
          this.rS.InsertarUser(this.user).subscribe((data) => {
            this.rS.getUsers().subscribe((data) => {
              this.rS.setListaUser(data);
            });
          });
        }
        this.router.navigate(['Recicladores']);
      } else {
        this.mensaje = 'Complete los valores requeridos';
      }
      
    }

    init() {
      if (this.edicion) {
        this.rS.ListarIdUbication(this.id).subscribe((data) => {
          this.user = data;
        });
      }
    }

}
