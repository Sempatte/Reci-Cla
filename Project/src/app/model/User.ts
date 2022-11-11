import Historial from "./Historial";
import { Ubication } from "./Ubication";
export class User {
  id : number = 0;
  nombre : string = "";
  apellido : string = "";
  email : string = "";
  telefono : string = "";
  dni : string = "";
  esReciclador : boolean = true;
  ubication : Ubication = new Ubication();
  historial : Historial = new Historial();
}
