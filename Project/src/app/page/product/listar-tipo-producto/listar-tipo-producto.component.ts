import { TypeOfRewardService } from 'src/app/service/type-of-reward.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioTsService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-listar-tipo-producto',
  templateUrl: './listar-tipo-producto.component.html',
  styleUrls: ['./listar-tipo-producto.component.css']
})
export class ListarTipoProductoComponent implements OnInit {

  DataSource : MatTableDataSource<any> = new MatTableDataSource ()
  DisplayedColumns : String[]=["id","nameType","description"]

  constructor(private tUs: TypeOfRewardService) { }

  ngOnInit(): void {

    this.tUs.listarTypeOfReward().subscribe(data=>{
      this.DataSource = new MatTableDataSource(data);
    })

    this.tUs.getListaTypeOfReward().subscribe(data=>{
      this.DataSource = new MatTableDataSource(data);
    })
  }
}
