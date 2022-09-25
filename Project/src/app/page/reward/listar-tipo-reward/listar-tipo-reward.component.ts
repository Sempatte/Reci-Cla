import { TypeOfRewardService } from 'src/app/service/type-of-reward.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listar-tipo-reward',
  templateUrl: './listar-tipo-reward.component.html',
  styleUrls: ['./listar-tipo-reward.component.css'],
})
export class ListarTipoRewardComponent implements OnInit {
  DataSource: MatTableDataSource<any> = new MatTableDataSource();
  DisplayedColumns: String[] = ['id', 'nameType', 'description', 'acciones'];

  constructor(private tUs: TypeOfRewardService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tUs.listarTypeOfReward().subscribe((data) => {
      console.log(data);
      this.DataSource = new MatTableDataSource(data);
    });

    this.tUs.getListaTypeOfReward().subscribe((data) => {
      console.log(data);
      this.DataSource = new MatTableDataSource(data);
    });
  }
}
