import { InsertarSolicitudComponent } from './page/solicitud/insertar-solicitud/insertar-solicitud.component';
import { SolicitudComponent } from './page/solicitud/solicitud.component';
import { InsertarTicketComponent } from './page/ticket/listar-ticket/insertar-ticket/insertar-ticket.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { TipoDeTicketComponent } from './page/ticket/tipo-de-ticket/tipo-de-ticket.component';
import { InsertarTipoDeRewardComponent } from './page/reward/insertar-tipo-de-reward/insertar-tipo-de-reward.component';
import { ListarRewardsUserComponent } from './page/reward/listar-rewards-user/listar-rewards-user.component';
import { ListarScoresRecicladorComponent } from './page/score/listar-scores-reciclador/listar-scores-reciclador.component';
import { HomeComponent } from './page/home/home.component';
import { RecicladorComponent } from './page/reciclador/reciclador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHistorialRecicladorComponent } from './page/reciclador/listar-historial-reciclador/listar-historial-reciclador.component';
import { RewardComponent } from './page/reward/reward.component';
import { ListarTipoRewardComponent } from './page/reward/listar-tipo-reward/listar-tipo-reward.component';
import { UbicationComponent } from './page/ubication/ubication.component';
import { InsertarUbicationComponent } from './page/ubication/insertar-ubication/insertar-ubication.component';
import { Insertar_o_Editar_Usuario } from './components/Insertar_o_Editar_Usuario/Insertar_o_Editar_Usuario.component';
import { RecolectorComponent } from './page/recolector/recolector.component';
import { InsertarTipoDeTicketComponent } from './page/ticket/tipo-de-ticket/insertar-tipo-de-ticket/insertar-tipo-de-ticket.component';
import { ScoreComponent } from './page/score/score.component';
import { EditarInsertarScoreComponent } from './page/score/editar-insertar-score/editar-insertar-score.component';
import { InsertarRewardComponent } from './page/reward/insertar-reward/insertar-reward.component';
import { LoginComponent } from './page/login/login.component';
// Rutas de nav
const routes: Routes = [
  { path: 'Home', redirectTo: '/Home', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'Recicladores',
    component: RecicladorComponent,
    children: [
      { path: 'insertar', component: Insertar_o_Editar_Usuario },
      { path: 'editar/:id', component: Insertar_o_Editar_Usuario },
    ],
  },
  {
    path: 'Recolectores',
    component: RecolectorComponent,
    children: [
      { path: 'insertar', component: Insertar_o_Editar_Usuario },
      { path: 'editar/:id', component: Insertar_o_Editar_Usuario },
    ],
  },
  { path: 'Home', component: HomeComponent },
  {
    path: 'Scores',
    component: ScoreComponent,
    children: [
      { path: 'insertar', component: EditarInsertarScoreComponent },
      { path: 'editar/:id', component: EditarInsertarScoreComponent },
    ],
  },
  { path: 'ListarHistorial', component: ListarHistorialRecicladorComponent },
  {
    path: 'ListarProductos',
    component: RewardComponent,
    children: [
      { path: 'insertar', component: InsertarRewardComponent },
      { path: 'editar/:id', component: InsertarRewardComponent },
    ],
  },
  {
    path: 'ListarTipoProductos',
    component: ListarTipoRewardComponent,
    children: [
      {
        path: 'insertar',
        component: InsertarTipoDeRewardComponent,
      },
      {
        path: 'editar/:id',
        component: InsertarTipoDeRewardComponent,
      },
    ],
  },
  {
    path: 'ListarTipoDeTickets',
    component: TipoDeTicketComponent,
    children: [
      {
        path: 'insertar',
        component: InsertarTipoDeTicketComponent,
      },
      {
        path: 'editar/:id',
        component: InsertarTipoDeTicketComponent,
      },
    ],
  },
  { path: 'ListarRewards_User', component: ListarRewardsUserComponent },
  {
    path: 'ListarUbicacion',
    component: UbicationComponent,
    children: [
      {
        path: 'insertar',
        component: InsertarUbicationComponent,
      },
      {
        path: 'editar/:id',
        component: InsertarUbicationComponent,
      },
    ],
  },
  {
    path: 'ListarTickets',
    component: TicketComponent,
    children: [
      { path: 'insertar', component: InsertarTicketComponent },
      { path: 'editar/:id', component: InsertarTicketComponent },
    ],
  },
  {
    path: 'Solicitudes',
    component: SolicitudComponent,
    children: [
      { path: 'insertar', component: InsertarSolicitudComponent },
      { path: 'editar/:id', component: InsertarSolicitudComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
