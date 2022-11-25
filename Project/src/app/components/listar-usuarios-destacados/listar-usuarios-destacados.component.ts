import { User } from './../../model/User';
import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/service/score.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-usuarios-destacados',
  templateUrl: './listar-usuarios-destacados.component.html',
})
export class ListarUsuariosDestacadosComponent implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  displayedColumns: string[] = [
    'id',
    'nombre_usuario',
    'telefono',
    'n_estrellas',
    'TipoUsuario',
  ];
  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scoreService.getUsuariosDestacados().subscribe((data) => {
      this.dataSource = new MatTableDataSource<User>(data);
    });
  }
}
