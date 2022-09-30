import { Component, OnInit } from '@angular/core';
import { TypeOfRewardService } from 'src/app/service/type-of-reward.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-tipo-reward-dialogo',
  templateUrl: './tipo-reward-dialogo.component.html',
  styleUrls: ['./tipo-reward-dialogo.component.css'],
})
export class TipoRewardDialogoComponent implements OnInit {
  constructor(
    private typeofrewardService: TypeOfRewardService,
    private dialogRef: MatDialogRef<TipoRewardDialogoComponent>
  ) {}

  ngOnInit(): void {}
  confirmar(estado: boolean) {
    this.typeofrewardService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
