import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Trabajar con peticiones http
import {HttpClientModule} from '@angular/common/http';

//Trabajar con tablas material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

//trabajar con controles de formularios material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

// mensajes de alerta
import {MatSnackBarModule} from '@angular/material/snack-bar';

//iconos
import {MatIconModule} from '@angular/material/icon';

//modales
import {MatDialogModule} from '@angular/material/dialog';

//cuadriculas
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './Componentes/menu/menu.component';



import { MatSidenavModule } from '@angular/material/sidenav';
import { EmpleadoComponent } from './Componentes/empleado/empleado.component';
import { DialogAgregarEditarEmpleadosComponent } from './Componentes/dialog-agregar-editar-empleados/dialog-agregar-editar-empleados.component';
import { LoginComponent } from './Componentes/login/login.component';
import { TableroComponent } from './Componentes/tablero/tablero.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ConfiguracionComponent } from './Componentes/configuracion/configuracion.component';
import { FooterComponent } from './Componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmpleadoComponent,
    DialogAgregarEditarEmpleadosComponent,
    LoginComponent,
    TableroComponent,
    ConfiguracionComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    RouterModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
