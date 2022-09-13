import { MatTableDataSource } from '@angular/material/table'
import { Component, OnInit } from '@angular/core';
import { UsuarioTsService} from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/Usuario';
@Component({
  selector: 'app-reciclador',
  templateUrl: './reciclador.component.html',
  styleUrls: ['./reciclador.component.css']
})
export class RecicladorComponent implements OnInit {
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  listaRecicladores: any = [];
  displayedColumns: string[] = ['id','nombre', 'apellido' ,'email', 'telefono', 'dni'];

  constructor(private uS: UsuarioTsService) { }

  ngOnInit(): void {
    this.uS.getListaRecicladores().subscribe(data => {
      this.dataSource= new MatTableDataSource(data);
      console.log(data);
    })
  }

}
