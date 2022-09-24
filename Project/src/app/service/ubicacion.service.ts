import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ubication } from '../model/Ubication';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  url : string = 'http://localhost:5000/Ubications';
  private listaUbication = new Subject<Ubication[]>()

  constructor(private http: HttpClient) { }

  getUbication() {
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

  modificar(ubication: Ubication) {
    return this.http.put(this.url + "/" + ubication.id, ubication);
  }
  listarId(id: number) {
    return this.http.get<Ubication>(`${this.url}/${id}`);
  }

}
