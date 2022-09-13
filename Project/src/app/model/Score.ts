import { Usuario } from './Usuario';
export class Score {
  ScoreID: number = 0;
  reciclador: Usuario = new Usuario();
  pedidosRealizados : number = 0;
  pedidosEntregados : number = 0;
  pedidosCancelados : number = 0;
  nEstrellas: number = 0;
}
