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
import { HomeComponent } from './page/home/home.component';
import { RecolectorComponent } from './page/recolector/recolector.component';
import { ListarScoresRecicladorComponent } from './page/score/listar-scores-reciclador/listar-scores-reciclador.component';
import { ListarHistorialRecicladorComponent } from './page/reciclador/listar-historial-reciclador/listar-historial-reciclador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RewardComponent } from './page/reward/reward.component';
import { ListarTipoRewardComponent } from './page/reward/listar-tipo-reward/listar-tipo-reward.component';
import { ListarRewardsUserComponent } from './page/reward/listar-rewards-user/listar-rewards-user.component';
import { InsertarTipoDeRewardComponent } from './page/reward/insertar-tipo-de-reward/insertar-tipo-de-reward.component';
import { ListarTickets } from './page/ticket/listar-ticket/listar-ticket.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Insertar_o_Editar_Usuario } from './components/Insertar_o_Editar_Usuario/Insertar_o_Editar_Usuario.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { BuscarUsuarioComponent } from './components/buscar-usuario/buscar-usuario.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  DateAdapter,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TipoRewardDialogoComponent } from './page/reward/listar-tipo-reward/tipo-reward-dialogo/tipo-reward-dialogo.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { TipoDeTicketComponent } from './page/ticket/tipo-de-ticket/tipo-de-ticket.component';
import { BuscarTipoRewardComponent } from './page/reward/buscar-tipo-reward/buscar-tipo-reward.component';
import { InsertarTipoDeTicketComponent } from './page/ticket/tipo-de-ticket/insertar-tipo-de-ticket/insertar-tipo-de-ticket.component';
import { TipoTicketDialogoComponent } from './page/ticket/tipo-de-ticket/tipo-ticket-dialogo/tipo-ticket-dialogo.component';
import { DialogUbicationComponent } from './page/ubication/dialog-ubication/dialog-ubication.component';
import { BuscarUbicationComponent } from './page/ubication/buscar-ubication/buscar-ubication.component';
import { MatSelectModule } from '@angular/material/select';
import { ScoreComponent } from './page/score/score.component';
import { EditarInsertarScoreComponent } from './page/score/editar-insertar-score/editar-insertar-score.component';
import { InsertarTicketComponent } from './page/ticket/listar-ticket/insertar-ticket/insertar-ticket.component';
import { DialogScoreComponent } from './page/score/dialog-score/dialog-score.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DialogoTicketComponent } from './page/ticket/listar-ticket/dialogo-ticket/dialogo-ticket.component';
import { BuscarTicketComponent } from './page/ticket/listar-ticket/buscar-ticket/buscar-ticket.component';
import { InsertarRewardComponent } from './page/reward/insertar-reward/insertar-reward.component';
import { DialogoRewardComponent } from './page/reward/dialogo-reward/dialogo-reward.component';
import { LoginComponent } from './page/login/login.component';
import { CustomDateAdapter } from './utils/DateAdapter';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './components/loader/loader.component';

//import {MatLabelModule} from '@angular/material/label'

@NgModule({
  declarations: [
    AppComponent,
    RecicladorComponent,
    HomeComponent,
    RecolectorComponent,
    ListarScoresRecicladorComponent,
    ListarHistorialRecicladorComponent,
    RewardComponent,
    ListarTipoRewardComponent,
    ListarRewardsUserComponent,
    InsertarTipoDeRewardComponent,
    InsertarUbicationComponent,
    UbicationComponent,
    ListarTickets,
    SidenavComponent,
    Insertar_o_Editar_Usuario,
    DialogComponent,
    BuscarUsuarioComponent,
    TipoRewardDialogoComponent,
    TicketComponent,
    TipoDeTicketComponent,
    BuscarTipoRewardComponent,
    InsertarTipoDeTicketComponent,
    TipoTicketDialogoComponent,
    DialogUbicationComponent,
    BuscarUbicationComponent,
    ScoreComponent,
    EditarInsertarScoreComponent,
    InsertarTicketComponent,
    DialogScoreComponent,
    DialogoTicketComponent,
    BuscarTicketComponent,
    InsertarRewardComponent,
    DialogoRewardComponent,
    LoginComponent,
    LoaderComponent,
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
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatPaginatorModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
