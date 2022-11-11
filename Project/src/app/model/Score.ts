import { User } from './User';
export class Score {
  usuario: User = new User();
  pedidosRealizados : number = 0;
  pedidosEntregados : number = 0;
  pedidosCancelados : number = 0;
  nEstrellas: number = 0;
}
