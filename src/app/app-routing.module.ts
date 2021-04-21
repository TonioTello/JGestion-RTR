import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { CrearServicioComponent } from './pages/crear-servicio/crear-servicio.component';
import { RegistrarEquipoComponent } from './pages/registrar-equipo/registrar-equipo.component';
import { StockEquiposComponent } from './pages/stock-equipos/stock-equipos.component';
import { RegistrarVentaComponent } from './pages/registrar-venta/registrar-venta.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { RegistrarUsuariosComponent } from './pages/registrar-usuarios/registrar-usuarios.component';






const routes: Routes = [
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'crear-servicio', component: CrearServicioComponent },
  { path: 'registrar-equipo', component: RegistrarEquipoComponent },
  { path: 'stock-equipo', component: StockEquiposComponent },
  { path: 'registrar-venta', component: RegistrarVentaComponent },
  { path: 'app-lista-clientes', component: ListaClientesComponent },
  { path: 'registrar-usuarios', component: ListaClientesComponent },

  // otherwise redirect to login
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
