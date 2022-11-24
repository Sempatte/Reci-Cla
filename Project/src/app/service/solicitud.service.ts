import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Solicitud } from '../model/Solititud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private url:string=`${environment.host}/solicitudes`;
  private token = sessionStorage.getItem('token');
  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json');
  private listaCambio=new Subject<Solicitud[]>()
  private confirmaEliminacion=new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listarSolicitud(){
    return this.http.get<Solicitud[]>(this.url);
  }
  insertarSolicitud(soli:Solicitud){
    return this.http.post(this.url,soli);
  }
  modifySolicitud(soli:Solicitud){
    return this.http.put(this.url,soli);
  }
  eliminarSolicitud(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto:string){
    return this.http.post<Solicitud[]>(`${this.url}/buscar`,texto);
  }
  ListarIdSolicitud(id:number){
    return this.http.get<Solicitud>(`${this.url}/${id}`);
  }
  getListaSolicitud(){
    return this.listaCambio.asObservable();
  }
  setListaSolicitud(listaNueva:Solicitud[]){
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado:Boolean){
    this.confirmaEliminacion.next(estado);
  }
}
