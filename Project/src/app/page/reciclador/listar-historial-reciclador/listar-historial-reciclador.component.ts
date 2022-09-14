import { Component, OnInit } from '@angular/core';
import { UsuarioTsService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-listar-historial-reciclador',
  templateUrl: './listar-historial-reciclador.component.html',
  styleUrls: ['./listar-historial-reciclador.component.css']
})
export class ListarHistorialRecicladorComponent implements OnInit {

  error : string = "";
  nombreReciclador : string = "";
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  _find : boolean = false;
  displayedColumns: string[] = ['busquedaID','fecha' ,'hora' ,'contenido'];

  constructor(private uS: UsuarioTsService) { }

  ngOnInit(): void {

  }

  buscarHistorial(){

    this.uS.getHistorialXReciclador(this.nombreReciclador).subscribe(
      (data) => {

        if (data.length > 0) {
          data = data[0].history[0].busquedas;
          this.dataSource = new MatTableDataSource(data);
          this._find = true;
        } else {
          this._find = false;
          console.log("NO")
          this.error = "No se encontraron resultados";
        }

      }
    )
  }

}
