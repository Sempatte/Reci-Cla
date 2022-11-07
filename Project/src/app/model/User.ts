import Historial from "./Historial";
import { Ubication } from "./Ubication";
export class User {
  nombre : string = "";
  apellido : string = "";
  email : string = "";
  telefono : string = "";
  dni : string = "";
  esReciclador : boolean = true;
  ubicacion : Ubication = new Ubication();
  historial : Historial = new Historial();
}
