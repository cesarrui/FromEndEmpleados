import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './Componentes/empleado/empleado.component';
import { LoginComponent } from './Componentes/login/login.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { TableroComponent } from './Componentes/tablero/tablero.component';
import { AuntGuardGuard } from './guardianes/aunt.guard.guard';
import { ConfiguracionComponent } from './Componentes/configuracion/configuracion.component';

const routes: Routes = [
  {path: '', component: TableroComponent, canActivate: [AuntGuardGuard]},
  {path: 'empleados', component: EmpleadoComponent, canActivate: [AuntGuardGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuntGuardGuard]},
  {path: '**', component: TableroComponent, canActivate: [AuntGuardGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
