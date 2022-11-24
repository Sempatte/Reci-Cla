import { User } from './../../model/User';
import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/service/score.service';
import { ActivatedRoute } from '@angular/router';
import { Score } from 'src/app/model/Score';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-usuarios-destacados',
  templateUrl: './listar-usuarios-destacados.component.html',
  styleUrls: ['./listar-usuarios-destacados.component.css'],
})
export class ListarUsuariosDestacadosComponent implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  displayedColumns: string[] = [
    'id',
    'nombre_usuario',
    'telefono',
    'n_estrellas',
    'TipoUsuario'
  ];
  constructor(
    private scoreService: ScoreService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.scoreService.getUsuariosDestacados().subscribe((data) => {
      console.log('data', data);
      this.dataSource = new MatTableDataSource<User>(data);
    });
  }

}
