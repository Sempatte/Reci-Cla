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

  constructor(private us:UsuarioTsService) { }

  ngOnInit(): void {
  
    this.us.getTiposDeProductos().subscribe(data=>{
      this.DataSource = new MatTableDataSource(data);
      console.log(data);
    })
  }
}
