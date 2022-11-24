import { Ubication } from "./Ubication";
import { User } from "./User";

export class Solicitud{
    idSolicitud:number=0;
    Fecha:String='';
    Descripcion:String='';
    usuario:User=new User();
    ubicacion:Ubication=new Ubication();
}