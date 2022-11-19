import { Injectable } from '@angular/core';
import { JwtRequest } from '../model/jwtRequest';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = `${environment.host}/authenticate`;
  constructor(private http : HttpClient) { }

  login(request : JwtRequest) {
    return this.http.post(this.API_URL, request);
  }

  verificar(){
    let token = sessionStorage.getItem('token');
    return token != null;
  }
}
