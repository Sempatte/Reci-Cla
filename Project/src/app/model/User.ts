import { Ubication } from "./Ubication";
export class User {
  id : number = 0;
  nombre : string = "";
  apellido : string = "";
  email : string = "";
  telefono : string = "";
  dni : string = "";
  esReciclador : boolean = true;
  ubicacion : Ubication = new Ubication();
}
