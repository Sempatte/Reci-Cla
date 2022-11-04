import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ubication } from '../model/Ubication';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private url: string = environment.host;
  private confirmaEliminacion = new Subject<Boolean>()
  private listaUbication = new Subject<Ubication[]>()

  constructor(private http: HttpClient) { }

  getUbications() {
    return this.http.get<Ubication[]>(this.url);
  }

  InsertarUbication(ubication: Ubication){
    return this.http.post(this.url, ubication);
  }

  setListaUbication(listaNuevaUbication: Ubication[]){

    this.listaUbication.next(listaNuevaUbication);
  }

  getListaUbication(){
    return this.listaUbication.asObservable();
  }

  modifyUbication(ubication: Ubication) {
    return this.http.put(this.url + '/' + ubication.id, ubication);
  }

  ListarIdUbication(id: number) {
    return this.http.get<Ubication>(`${this.url}/${id}`);
  }

  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
