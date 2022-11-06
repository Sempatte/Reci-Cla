import { Component, OnInit } from '@angular/core';
import { RewardService } from 'src/app/service/lists.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  DataSource : MatTableDataSource<any> = new MatTableDataSource ()
  DisplayedColumns : String[]=["id","name","TipoProducto"]

  constructor(private us:RewardService) { }

  ngOnInit(): void {

    this.us.getProducto().subscribe(data=>{
      this.DataSource = new MatTableDataSource(data);
      console.log(data);
    }
      )
  }

}
