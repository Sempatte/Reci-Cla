import { MatTableDataSource } from '@angular/material/table'
import { Component, OnInit } from '@angular/core';
import { UsuarioTsService} from 'src/app/service/lists.service';
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-reciclador',
  templateUrl: './reciclador.component.html',
  styleUrls: ['./reciclador.component.css']
})
export class RecicladorComponent implements OnInit {
  isLoading : boolean = true;
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  listaRecicladores: any = [];
  displayedColumns: string[] = ['id','nombre', 'apellido' ,'email', 'telefono', 'dni'];

  constructor(private uS: UsuarioTsService) { }

  ngOnInit(): void {
    this.uS.getListaRecicladores().subscribe(data => {
      this.isLoading = false;
      this.dataSource= new MatTableDataSource(data);

    })
  }

}
