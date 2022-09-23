import { TypeOfRewardService } from 'src/app/service/type-of-reward.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-listar-tipo-reward',
  templateUrl: './listar-tipo-reward.component.html',
  styleUrls: ['./listar-tipo-reward.component.css']
})
export class ListarTipoRewardComponent implements OnInit {

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
