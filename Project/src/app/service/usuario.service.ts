import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioTsService {

  constructor(private http: HttpClient) { }

  getListaRecicladores() {
    return this.http.get<Usuario[]>('http://localhost:5000/Recicladores');
  }
}
