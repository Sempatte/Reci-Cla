import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { Solicitud } from 'src/app/model/Solititud';
import { Ubication } from 'src/app/model/Ubication';
import { User } from 'src/app/model/User';
import { RecicladorService } from 'src/app/service/reciclador.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { UbicacionService } from 'src/app/service/ubicacion.service';

@Component({
  selector: 'app-insertar-solicitud',
  templateUrl: './insertar-solicitud.component.html',
  styleUrls: ['./insertar-solicitud.component.css']
})
export class InsertarSolicitudComponent implements OnInit {
  soli: Solicitud = new Solicitud();
  mensaje: string = '';
  edicion: boolean = false;

  listaUbicaciones: Ubication[] = [];
  listaUsuarios: User[] = [];

  idUbicacionSeleccionado: number = 0;
  idUsuarioSeleccionado: number = 0;

  id: number = 0;

  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = '';
  constructor(private sS: SolicitudService,private ubiS: UbicacionService,private usuarioService: RecicladorService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.ubiS.getUbications().subscribe((data)=>{
      this.listaUbicaciones=data;
    });
    this.usuarioService.getAllUsers().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }
  aceptar(){
    if(this.soli.Descripcion.length>=0 &&this.idUbicacionSeleccionado!==null &&
      this.idUsuarioSeleccionado!=null && this.soli.Fecha.length>=0){
        let _ubicacion=new Ubication();
        let _user = new User();

        _ubicacion.id = this.idUbicacionSeleccionado;
        _user.id = this.idUsuarioSeleccionado;

        this.soli.ubicacion = _ubicacion;
        this.soli.usuario = _user;

        this.soli.Fecha = moment(this.fechaSeleccionada).format(
          'YYYY-MM-DDTHH:mm:ss'
        );
        if(this.edicion){
          this.sS.modifySolicitud(this.soli).subscribe(()=>{
            this.sS.listarSolicitud().subscribe((data)=>{
              this.sS.setListaSolicitud(data);
            });
          });
        }else{
          this.sS.insertarSolicitud(this.soli).subscribe(()=>{
            this.sS.listarSolicitud().subscribe((data)=>{
              this.sS.setListaSolicitud(data);
            });
          });
        }
        this.router.navigate(['Solicitudes']);
      }else{this.mensaje='Complete los valores requeridos';}
  }
  init(){
    if (this.edicion) {
      console.log('a')
      this.sS.ListarIdSolicitud(this.id).subscribe((data) => {
        this.idUbicacionSeleccionado = data.ubicacion.id;
        this.idUsuarioSeleccionado = data.usuario.id;
        this.soli = data;
      });
    }
  }
}
