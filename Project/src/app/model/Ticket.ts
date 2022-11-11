import { User } from './User';
import { TipoTicket } from './TipoTicket';

export class Ticket {
  idTicket: number = 0;
  descripcionReclamo: string = '';
  estado: string = "Activo";
  usuario: User = new User();
  tipoTicket: TipoTicket = new TipoTicket();
  fecha: string = '';
}
