import { ListarScoresRecicladorComponent } from './page/reciclador/listar-scores-reciclador/listar-scores-reciclador.component';
import { HomeComponent } from './page/home/home.component';
import { RecicladorComponent } from './page/reciclador/reciclador.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHistorialRecicladorComponent } from './page/reciclador/listar-historial-reciclador/listar-historial-reciclador.component';

// Rutas de nav
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Recicladores', component: RecicladorComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ListarScores', component: ListarScoresRecicladorComponent },
  { path: 'ListarHistorial', component: ListarHistorialRecicladorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
