import { JwtRequest } from './../../model/jwtRequest';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  username: string = '';
  password: string = '';
  mensaje: string = '';
  __horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  __verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {
    if (this.loginService.verificar()) {
      this.router.navigate(['Home']);
    }
  }

  login() {
    let request = new JwtRequest();
    request.username = this.username;
    request.password = this.password;
    this.loginService.login(request).subscribe(
      (data: any) => {
        console.log('data login', data);
        sessionStorage.setItem('token', data.jwttoken);
        sessionStorage.setItem('username', this.username);
        this.router.navigate(['Home']);
      },
      (error) => {
        this.mensaje = 'Credenciales incorrectas';
        this.snackBar.open(this.mensaje, 'Aviso', {
          horizontalPosition: this.__horizontalPosition,
          verticalPosition: this.__verticalPosition,
          duration: 2000,
        });
        this.password = '';
      }
    );
  }
}
