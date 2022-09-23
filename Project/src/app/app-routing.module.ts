import { InsertarTipoDeRewardComponent } from './page/reward/insertar-tipo-de-reward/insertar-tipo-de-reward.component';
import { ListarRewardsUserComponent } from './page/reward/listar-rewards-user/listar-rewards-user.component';
import { ListarScoresRecicladorComponent } from './page/reciclador/listar-scores-reciclador/listar-scores-reciclador.component';
import { HomeComponent } from './page/home/home.component';
import { RecicladorComponent } from './page/reciclador/reciclador.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHistorialRecicladorComponent } from './page/reciclador/listar-historial-reciclador/listar-historial-reciclador.component';
import { RewardComponent } from './page/reward/reward.component';
import { ListarTipoRewardComponent } from './page/reward/listar-tipo-reward/listar-tipo-reward.component';
import { UbicationComponent } from './page/ubication/ubication.component';
import { InsertarUbicationComponent } from './page/ubication/insertar-ubication/insertar-ubication.component';
import { ListarTicketRecicladorComponent } from './page/reciclador/listar-ticket-reciclador/listar-ticket-reciclador.component';


// Rutas de nav
const routes: Routes = [
  { path: 'Home', redirectTo: '/Home', pathMatch: 'full' },
  { path: '', redirectTo: '/Home', pathMatch: 'full'  },
  { path: 'Recicladores', component: RecicladorComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ListarScores', component: ListarScoresRecicladorComponent },
  { path: 'ListarHistorial', component: ListarHistorialRecicladorComponent},
  { path: 'ListarProductos', component: RewardComponent},
  { path: 'ListarTipoProductos', component: ListarTipoRewardComponent },
  { path: 'InsertarTipoDeProductos', component: InsertarTipoDeRewardComponent},
  { path: 'ListarRewards_User', component: ListarRewardsUserComponent},
  { path: 'ListarUbicacion', component: UbicationComponent},
  { path: 'InsertarUbicacion', component: InsertarUbicationComponent},
  { path: 'ListarTickets', component: ListarTicketRecicladorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
