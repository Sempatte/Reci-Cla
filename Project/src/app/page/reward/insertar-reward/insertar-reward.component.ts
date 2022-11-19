import { Component, OnInit } from '@angular/core';
import{Reward} from 'src/app/model/Reward'
import{Types} from 'src/app/model/Types'
import * as moment from 'moment';
import { RewardService } from 'src/app/service/reward.service';
import { TypeOfRewardService } from 'src/app/service/type-of-reward.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-insertar-reward',
  templateUrl: './insertar-reward.component.html',
})
export class InsertarRewardComponent implements OnInit {
  reward: Reward = new Reward();
  mensaje: string = '';
  edicion: boolean = false;

  listaTipoReward: Types[] = [];
  idTipoRewardSeleccionado: number = 0;
  id: number = 0;

  fechaSeleccionadaStart: Date = moment().add(-1, 'days').toDate();
  fechaSeleccionadaEnd: Date = moment().add(+1, 'days').toDate();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = '';

  constructor(
    private rewardService: RewardService,
    private typeOfRewardService: TypeOfRewardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.typeOfRewardService.listarTypeOfReward().subscribe((data) => {
      this.listaTipoReward = data;
    } );
  }

  aceptar() {
    if (
      this.reward.nameReward.length >= 0 &&
      this.reward.startDate.length >= 0 &&
      this.reward.endDate.length >= 0 &&
      this.reward.code.length >= 0 &&
      this.reward.description.length >= 0 &&
      this.idTipoRewardSeleccionado !== null &&
      this.fechaSeleccionadaStart !== null &&
      this.fechaSeleccionadaEnd !== null
    ) {
      let _tipoReward = new Types();
      _tipoReward.id = this.idTipoRewardSeleccionado;
      this.reward.types = _tipoReward;

      this.reward.startDate = moment(this.fechaSeleccionadaStart).format('YYYY-MM-DD');
      this.reward.endDate = moment(this.fechaSeleccionadaEnd).format('YYYY-MM-DD');
      if (this.edicion) {

        this.rewardService.modifyRewards(this.reward).subscribe(() => {
          this.rewardService.listarRewards().subscribe((data) => {
            this.rewardService.setListaRewards(data);
          });
        } );
      } else {
        this.rewardService.insertarRewards(this.reward).subscribe(() => {
          this.rewardService.listarRewards().subscribe((data) => {
            this.rewardService.setListaRewards(data);
          });
        } );
      }
      this.router.navigate(['ListarProductos']);
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }

  init() {

    if (this.edicion) {
      this.rewardService.ListarIdReward(this.id).subscribe((data) => {
        this.idTipoRewardSeleccionado = data.types.id;
        this.reward = data;

      });
    }
  }

}
