import { Component, OnInit } from '@angular/core';
import { TypeOfUsuarioTsService } from 'src/app/service/type-of-reward.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-tipo-reward-dialogo',
  templateUrl: './tipo-reward-dialogo.component.html',
  styleUrls: ['./tipo-reward-dialogo.component.css'],
})
export class TipoRewardDialogoComponent implements OnInit {
  constructor(
    private typeofUsuarioTsService: TypeOfUsuarioTsService,
    private dialogRef: MatDialogRef<TipoRewardDialogoComponent>
  ) {}

  ngOnInit(): void {}
  confirmar(estado: boolean) {
    this.typeofUsuarioTsService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
