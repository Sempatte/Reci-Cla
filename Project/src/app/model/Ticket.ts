import { User } from './User';
import { TipoTicket } from './TipoTicket';

export class Ticket {
  idTicket: number = 0;
  DescriptionReclamo: string = '';
  Estado: string = "Activo";
  Usuario: User = new User();
  TipoTicket: TipoTicket = new TipoTicket();
  fecha: string = '';
}
