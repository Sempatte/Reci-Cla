import { Recycler } from './Recycler';
export class Score {
  ScoreID: number = 0;
  reciclador: Recycler = new Recycler();
  pedidosRealizados : number = 0;
  pedidosEntregados : number = 0;
  pedidosCancelados : number = 0;
  nEstrellas: number = 0;
}
