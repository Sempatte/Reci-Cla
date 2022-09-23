import { Component, OnInit } from '@angular/core';
import { UsuarioTsService } from 'src/app/service/lists.service';
import { MatTableDataSource } from '@angular/material/table';
import { Rewards_Users } from 'src/app/model/Rewards_User';

@Component({
  selector: 'app-listar-rewards-user',
  templateUrl: './listar-rewards-user.component.html',
  styleUrls: ['./listar-rewards-user.component.css']
})
export class ListarRewardsUserComponent implements OnInit {

  DataSource : MatTableDataSource<Rewards_Users> = new MatTableDataSource() // Instancia de la clase
  DisplayedColumns : String[]= ["RewardId", "nombres", "StartDate", "EndDate" , "NameReward", "Description", "CodeReward", "Claimed"]
  constructor(private uS: UsuarioTsService) { }

  ngOnInit(): void {
    this.uS.getRewardsUser().subscribe( data => {
      this.DataSource = new MatTableDataSource(data); // <--- pasar la data al DataSource
      console.log(data);
    });
  }

}
