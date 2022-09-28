import { Component, OnInit } from '@angular/core';
import { UsuarioTsService } from 'src/app/service/lists.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/User';
import { RecicladorService } from 'src/app/service/reciclador.service';

@Component({
  selector: 'app-listar-historial-reciclador',
  templateUrl: './listar-historial-reciclador.component.html',
  styleUrls: ['./listar-historial-reciclador.component.css'],
})
export class ListarHistorialRecicladorComponent implements OnInit {
  error: string = '';
  nombresEncontrados: string = '';
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  _find: boolean = false;
  displayedColumns: string[] = ['busquedaID', 'fecha', 'hora', 'contenido'];

  constructor(private rS: RecicladorService) {}

  ngOnInit(): void {}

  buscarHistorial(_e: any) {
    let array: any[] = [];
    if (_e.target.value.length > 1) {
      this.rS.getHistorialRecicladores().subscribe(
        (data) => {
          array = data.filter(
            (e) =>
              e['nombre'].includes(_e.target.value) ||
              e['apellido'].includes(_e.target.value) ||
              e['dni'].includes(_e.target.value) ||
              e['email'].includes(_e.target.value) ||
              e['telefono'].includes(_e.target.value)
          );
          if (array.length > 0) {
            this.nombresEncontrados = array[0].nombre + ' ' + array[0].apellido;
            this._find = true;

            array = array[0].historial;
            console.info('arr', array);
            if (array.length < 1) {
              this._find = false;
              this.error = 'No hay historial registrado';
              return;
            }
            array = array[0].busquedas;
            console.log('e', array);
            this.rS.setListaUser(array);
            this.dataSource = new MatTableDataSource(array);
            this.error = '';
          } else {
            this._find = false;
            console.log('NO');
            this.error = 'No se encontraron resultados';
          }
        },
        (error) => {
          this._find = false;
          this.error = 'Uknown error';
        }
      );
    } else {
      this._find = false;
    }

    //this.nombreReciclador = this.nombreReciclador.charAt(0).toUpperCase() + this.nombreReciclador.slice(1);
    /* this.uS.getHistorialXReciclador(this.nombreReciclador).subscribe(

      (data) => {
        if (data.length > 0) {
          this.data_apellidoReciclador = data[0].apellido;
          this.data_nombreReciclador = data[0].nombre;
          data = data[0].history[0].busquedas;
          this.dataSource = new MatTableDataSource(data);
          this._find = true;
        } else {
          this._find = false;
          console.log("NO")
          this.error = "No se encontraron resultados";
        }

      },
      (error) => {
        this._find = false;
        this.error = "Uknown error";
      }
    ) */
  }
}
