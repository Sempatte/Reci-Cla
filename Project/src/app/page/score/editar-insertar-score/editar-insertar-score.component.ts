import { RecicladorService } from 'src/app/service/reciclador.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Score } from 'src/app/model/Score';
import { User } from 'src/app/model/User';
import { ScoreService } from 'src/app/service/score.service';

@Component({
  selector: 'app-editar-insertar-score',
  templateUrl: './editar-insertar-score.component.html',
  styleUrls: ['./editar-insertar-score.component.css'],
})
export class EditarInsertarScoreComponent implements OnInit {
  score: Score = new Score();
  mensaje: string = '';
  edicion: boolean = false;
  listaUsuarios: User[] = [];
  _idUsuarioSeleccionado: number = 0;
  id: number = 0;

  constructor(
    private scoreService: ScoreService,
    private usuarioService: RecicladorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usuarioService.getAllUsers().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }

  aceptar_Modificar_o_Insertar() {
    if (
      this.score.nEstrellas >= 0 &&
      this.score.pedidosCancelados >= 0 &&
      this.score.pedidosRealizados >= 0 &&
      this.score.pedidosEntregados >= 0 &&
      this._idUsuarioSeleccionado !== null
    ) {
      let _usuario = new User();
      _usuario.id = this._idUsuarioSeleccionado;
      this.score.usuario = _usuario;
      if (this.edicion) {
        this.scoreService.modificarScore(this.score).subscribe(() => {
          this.scoreService.listarScores().subscribe((data) => {
            this.scoreService.setListaScore(data);
          });
        });
      } else {

        this.scoreService.insertarScore(this.score).subscribe(() => {
          this.scoreService.listarScores().subscribe((data) => {
            this.scoreService.setListaScore(data);
          });
        });
      }
      this.router.navigate(['Scores']);
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }

  init() {
    if (this.edicion) {
      this.scoreService.listarIdScore(this.id).subscribe((data) => {
        this.score = data;
        this._idUsuarioSeleccionado = this.score.usuario.id;
      });
    }
  }
}
