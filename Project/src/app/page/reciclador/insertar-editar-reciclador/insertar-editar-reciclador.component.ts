import { RecicladorService } from './../../../service/reciclador.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import Historial from 'src/app/model/Historial';
import { Ubication } from 'src/app/model/Ubication';
import { UsuarioTsService } from 'src/app/service/lists.service';

@Component({
  selector: 'app-insertar-editar-reciclador',
  templateUrl: './insertar-editar-reciclador.component.html',
  styleUrls: ['./insertar-editar-reciclador.component.css'],
})
export class InsertarEditarRecicladorComponent implements OnInit {
  user: User = new User();
  mensaje: string = '';
  edicion: boolean = false;
  listaHistorial: Historial[] = [];
  listaUbicaciones: Ubication[] = [];
  _idHistorialSeleccionado: number = 0;
  _idUbicacionSeleccionado: number = 0;
  id: number = 0;
  current_route: string = this.router.url.split('/')[1];
  esRecolector: boolean = false;
  agregarComoReciclador: boolean = true;

  constructor(
    private rS: RecicladorService,
    private usuarioService: UsuarioTsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usuarioService.getHistorial().subscribe((data) => {
      this.listaHistorial = data;
    });
    this.usuarioService.getUbicaciones().subscribe((data) => {
      this.listaUbicaciones = data;
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
      let _historial = new Historial();
      let _ubicacion = new Ubication();
      _historial.id = this._idHistorialSeleccionado;
      _ubicacion.id = this._idUbicacionSeleccionado;
      this.user.historial = _historial;
      this.user.ubication = _ubicacion;
      console.log('this.user', this.user);
      if (this.edicion) {
        this.rS.modifyUser(this.user).subscribe((data) => {
          this.rS.getAllUsers().subscribe((data) => {
            data = data.filter((obj) => {
              return obj.esReciclador === this.user.esReciclador;
            });
            this.rS.setListaUser(data);
          });
        });
      } else {
        this.rS.InsertarUser(this.user).subscribe((data) => {
          this.rS.getAllUsers().subscribe((data) => {
            data = data.filter((obj) => {
              return obj.esReciclador === this.user.esReciclador;
            });
            this.rS.setListaUser(data);
          });
        });
      }

      if (this.user.esReciclador) this.router.navigate(['Recicladores']);
      else this.router.navigate(['Recolectores']);
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }

  init() {
    this.esRecolector = this.current_route === 'Recolectores' && true;
    
    if (this.edicion) {
      this.rS.ListarIdUser(this.id).subscribe((data) => {
        this._idHistorialSeleccionado = data.historial.id;
        this._idUbicacionSeleccionado = data.ubication.id;
        this.user = data;
      });
    }
  }
}
