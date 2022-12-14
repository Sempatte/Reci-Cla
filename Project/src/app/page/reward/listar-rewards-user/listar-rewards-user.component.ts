import { Component, OnInit } from '@angular/core';
import { ExtraService } from 'src/app/service/lists.service';
import { MatTableDataSource } from '@angular/material/table';
import { Rewards_Users } from 'src/app/model/Rewards_User';

@Component({
  selector: 'app-listar-rewards-user',
  templateUrl: './listar-rewards-user.component.html',
  styleUrls: ['./listar-rewards-user.component.css'],
})
export class ListarRewardsUserComponent implements OnInit {
  DataSource: MatTableDataSource<Rewards_Users> = new MatTableDataSource(); // Instancia de la clase
  isLoading: boolean = true;
  DisplayedColumns: String[] = [
    'RewardId',
    'nombres',
    'EndDate',
    'expired',
    'NameReward',
    'Description',
    'CodeReward',
    'Claimed',
  ];
  constructor(private uS: ExtraService) {}

  ngOnInit(): void {
    this.uS.getRewardsUser().subscribe((data) => {
      this.isLoading = false;
      this.DataSource = new MatTableDataSource(data); 
    });
  }

  validarFechaMenorActual(date: String): boolean {
    const x = new Date();
    const Fecha: any = date.split('/');
    x.setFullYear(Fecha[2], Fecha[1] - 1, Fecha[0]);
    var today = new Date();

    if (x >= today) return false; // No Vencio
    else return true; // Vencio
  }
}
