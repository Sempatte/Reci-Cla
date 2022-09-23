import { UbicationComponent } from './page/ubication/ubication.component';
import { InsertarUbicationComponent } from './page/ubication/insertar-ubication/insertar-ubication.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecicladorComponent } from './page/reciclador/reciclador.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { RecolectorComponent } from './page/recolector/recolector.component';
import { ListarScoresRecicladorComponent } from './page/reciclador/listar-scores-reciclador/listar-scores-reciclador.component';
import { ListarHistorialRecicladorComponent } from './page/reciclador/listar-historial-reciclador/listar-historial-reciclador.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductComponent } from './page/product/product.component';
import { ListarTipoProductoComponent } from './page/product/listar-tipo-producto/listar-tipo-producto.component';
import { ListarRewardsUserComponent } from './page/product/listar-rewards-user/listar-rewards-user.component';
import { InsertarTipoDeRewardComponent } from './page/product/insertar-tipo-de-reward/insertar-tipo-de-reward.component';
//import {MatLabelModule} from '@angular/material/label'

@NgModule({
  declarations: [
    AppComponent,
    RecicladorComponent,
    NavbarComponent,
    HomeComponent,
    RecolectorComponent,
    ListarScoresRecicladorComponent,
    ListarHistorialRecicladorComponent,
    ProductComponent,
    ListarTipoProductoComponent,
    ListarRewardsUserComponent,
    InsertarTipoDeRewardComponent,
    InsertarUbicationComponent,
    UbicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
