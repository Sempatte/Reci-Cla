import { MatTableDataSource } from '@angular/material/table'
import { Component, OnInit } from '@angular/core';
import { Ubication } from 'src/app/model/Ubication';
import { UbicacionService } from 'src/app/service/ubicacion.service';

@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.component.html',
  styleUrls: ['./ubication.component.css']
})
export class UbicationComponent implements OnInit {

  DataSource: MatTableDataSource<Ubication> = new MatTableDataSource();
  listaUbication: Ubication[] = [];
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  displayedColumns: string[] = ['idUbication','Distrito', 'Direccion' ];
=======
  displayedColumns: string[] = ['idUbication','Distrito', 'Direccion', 'acciones' ];
>>>>>>> Stashed changes
=======
  displayedColumns: string[] = ['idUbication','Distrito', 'Direccion', 'acciones' ];
>>>>>>> Stashed changes

  constructor(private ubS: UbicacionService) { }

  ngOnInit(): void {
    this.ubS.getUbication().subscribe(data => {

      this.DataSource = new MatTableDataSource(data);
    })

    this.ubS.getListaUbication().subscribe(data => {

      this.DataSource = new MatTableDataSource(data);
    });

  }

<<<<<<< Updated upstream
}
=======
} 
>>>>>>> Stashed changes
