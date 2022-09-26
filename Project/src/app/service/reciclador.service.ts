import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecicladorService {

  constructor(private http: HttpClient) { }

  url : string = 'http://localhost:5000/users';
  private listaUser = new Subject<User[]>()
  private confirmaEliminacion = new Subject<Boolean>()


  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  InsertarUser(user: User){
    return this.http.post(this.url, user);
  }

  setListaUser(listaNuevaUser: User[]){

    this.listaUser.next(listaNuevaUser);
  }

  getListaUser(){
    return this.listaUser.asObservable();
  }

  modifyUser(user: User) {
    return this.http.put(this.url + '/' + user.id, user);
  }

  ListarIdUbication(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
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
