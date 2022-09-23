import { InsertarTipoDeRewardComponent } from './page/product/insertar-tipo-de-reward/insertar-tipo-de-reward.component';
import { ListarRewardsUserComponent } from './page/product/listar-rewards-user/listar-rewards-user.component';
import { ListarScoresRecicladorComponent } from './page/reciclador/listar-scores-reciclador/listar-scores-reciclador.component';
import { HomeComponent } from './page/home/home.component';
import { RecicladorComponent } from './page/reciclador/reciclador.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHistorialRecicladorComponent } from './page/reciclador/listar-historial-reciclador/listar-historial-reciclador.component';
import { ProductComponent } from './page/product/product.component';
import { ListarTipoProductoComponent } from './page/product/listar-tipo-producto/listar-tipo-producto.component';
import { UbicationComponent } from './page/ubication/ubication.component';
import { InsertarUbicationComponent } from './page/ubication/insertar-ubication/insertar-ubication.component';

// Rutas de nav
const routes: Routes = [
  { path: 'Home', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Recicladores', component: RecicladorComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ListarScores', component: ListarScoresRecicladorComponent },
  { path: 'ListarHistorial', component: ListarHistorialRecicladorComponent},
  { path: 'ListarProductos', component: ProductComponent},
  { path: 'ListarTipoProductos', component: ListarTipoProductoComponent },
  { path: 'InsertarTipoDeProductos', component: InsertarTipoDeRewardComponent},
  { path: 'ListarRewards_User', component: ListarRewardsUserComponent},
  { path: 'ListarUbicacion', component: UbicationComponent},
  { path: 'InsertarUbicacion', component: InsertarUbicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
