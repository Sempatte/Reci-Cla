import { ListarScoresRecolectorComponent } from './page/recolector/listar-scores-recolector/listar-scores-recolector.component';
import { HomeComponent } from './page/home/home.component';
import { RecicladorComponent } from './page/reciclador/reciclador.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Rutas de nav
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Recicladores', component: RecicladorComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ListarScores', component: ListarScoresRecolectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
