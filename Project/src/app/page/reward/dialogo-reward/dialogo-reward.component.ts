import { Component, OnInit } from '@angular/core';
import{RewardService}from 'src/app/service/reward.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogo-reward',
  templateUrl: './dialogo-reward.component.html',
})
export class DialogoRewardComponent implements OnInit {

  constructor(private rewardService: RewardService, private dialogRef: MatDialogRef<DialogoRewardComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.rewardService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
