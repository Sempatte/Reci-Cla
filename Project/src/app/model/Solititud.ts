import { Ubication } from "./Ubication";
import { User } from "./User";

export class Solicitud{
    idSolicitud:number=0;
    fecha:String='';
    descripcion:String='';
    usuario:User=new User();
    ubicacion:Ubication=new Ubication();
}