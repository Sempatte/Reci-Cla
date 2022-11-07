import { Component, OnInit } from '@angular/core';
import { TypeOfRewardService } from 'src/app/service/type-of-reward.service';
import { Types } from 'src/app/model/Types';

@Component({
  selector: 'app-buscar-tipo-reward',
  templateUrl: './buscar-tipo-reward.component.html',
  styleUrls: ['./buscar-tipo-reward.component.css']
})
export class BuscarTipoRewardComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private typerewardService: TypeOfRewardService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Types[] = [];
    this.typerewardService.listarTypeOfReward().subscribe(data => {
      data.forEach((element, index) => {
        if (element.name.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.typerewardService.setListaTypeOfReward(array);
    })
  }
}
