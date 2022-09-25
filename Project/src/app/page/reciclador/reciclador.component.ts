import { MatTableDataSource } from '@angular/material/table'
import { Component, OnInit } from '@angular/core';
import { RecicladorService} from 'src/app/service/reciclador.service';
import { User } from 'src/app/model/User';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reciclador',
  templateUrl: './reciclador.component.html',
  styleUrls: ['./reciclador.component.css']
})
export class RecicladorComponent implements OnInit {
  isLoading : boolean = true;
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  listaRecicladores: any = [];
  displayedColumns: string[] = ['id','nombre', 'apellido' ,'email', 'telefono', 'dni', 'acciones'];

  constructor(private rS: RecicladorService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.rS.getUsers().subscribe(data => {
      this.isLoading = false;
      this.dataSource= new MatTableDataSource(data);

    })

    this.rS.getListaUser().subscribe(data => {
      this.isLoading = false;
      this.dataSource= new MatTableDataSource(data);

    })
  }

}
