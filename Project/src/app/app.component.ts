import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.verificar() === false && this.router.navigate(['login']);
  }

  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    return this.loginService.verificar();
  }
}
