import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ScoreService } from 'src/app/service/score.service';

@Component({
  selector: 'app-dialog-score',
  templateUrl: './dialog-score.component.html',
  styleUrls: ['./dialog-score.component.css']
})
export class DialogScoreComponent implements OnInit {

  constructor(private scoreService: ScoreService, private dialogRef: MatDialogRef<DialogScoreComponent>) { }

  ngOnInit(): void {
  }
  
  confirmar(estado: boolean) {
    this.scoreService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
