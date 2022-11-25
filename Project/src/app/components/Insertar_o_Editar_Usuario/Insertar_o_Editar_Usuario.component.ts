import { RecicladorService } from '../../service/reciclador.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import Historial from 'src/app/model/Historial';
import { Ubication } from 'src/app/model/Ubication';
import { ExtraService } from 'src/app/service/lists.service';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

export class EmailErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-Insertar_o_Editar_Usuario',
  templateUrl: './Insertar_o_Editar_Usuario.component.html',
  styleUrls: ['./Insertar_o_Editar_Usuario.component.css'],
})
export class Insertar_o_Editar_Usuario implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new EmailErrorMatcher();
  isLoading: boolean = true;
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
    private usuarioService: ExtraService,
    private ubicacionService: UbicacionService,
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
    this.ubicacionService.getUbications().subscribe((data) => {
      this.listaUbicaciones = data;
    });
  }
  
  getUsuarios() {
    this.rS.getAllUsers().subscribe((data) => {
      this.rS.setListaUser(
        data.filter((e) => e['esReciclador'] === this.user.esReciclador)
      );
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

      let _historial = new Historial()
      let _ubicacion = new Ubication();
      _historial.id = this._idHistorialSeleccionado;
      _ubicacion.id = this._idUbicacionSeleccionado;
      this.user.historial = _historial;
      this.user.ubication = _ubicacion;

      this.edicion
        ? this.rS.modifyUser(this.user).subscribe(() => {this.getUsuarios()})
        : this.rS.InsertarUser(this.user).subscribe(() => {this.getUsuarios()});
        
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
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
    }
  }
}
