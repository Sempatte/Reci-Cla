import { User } from './User';
export class Ticket {
  idTicket: number = 0;
  DescriptionReclamo: string = '';
  Estado: string = "Activo";
  Usuario: User = new User();
  fecha: string = '';
}
