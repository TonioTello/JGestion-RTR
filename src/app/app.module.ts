import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CrearServicioComponent } from './pages/crear-servicio/crear-servicio.component';
import { RegistrarEquipoComponent } from './pages/registrar-equipo/registrar-equipo.component';
import { StockEquiposComponent } from './pages/stock-equipos/stock-equipos.component';
import { RegistrarVentaComponent } from './pages/registrar-venta/registrar-venta.component';
import { HistorialVentasComponent } from './pages/historial-ventas/historial-ventas.component';
import { RegistrarClienteComponent } from './pages/registrar-cliente/registrar-cliente.component';
import { CronogramaComponent, DialogOverviewExampleDialog } from './pages/cronograma/cronograma.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { RegistrarUsuariosComponent } from './pages/registrar-usuarios/registrar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CrearServicioComponent,
    RegistrarEquipoComponent,
    StockEquiposComponent,
    RegistrarVentaComponent,
    HistorialVentasComponent,
    RegistrarClienteComponent,
    CronogramaComponent,
    DialogOverviewExampleDialog,
    ListaClientesComponent,
    RegistrarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents:[CronogramaComponent, DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
