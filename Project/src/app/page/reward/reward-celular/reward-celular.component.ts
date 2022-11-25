import { RewardService } from 'src/app/service/reward.service';
import { Reward } from './../../../model/Reward';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reward-celular',
  templateUrl: './reward-celular.component.html',
  styleUrls: ['./reward-celular.component.css']
})
export class RewardCelularComponent implements OnInit {
  dataSource: MatTableDataSource<Reward> = new MatTableDataSource<Reward>();
  displayedColumns: string[] = ['id', 'nombre','FechaInicio','FechaFin'];
  constructor(private rService: RewardService) { }

  ngOnInit(): void {
    this.rService.getRewardCelulares().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Reward>(data);
    } );
  }

}
