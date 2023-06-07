import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {NgxPrintModule} from 'ngx-print';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { FilterSolicitudPipe } from './pipes/filter-solicitud.pipe';
import { FilterProveedorPipe } from './pipes/filter-proveedor.pipe';


import { SolicitudComponent } from './Componentes/solicitud/Add-Form/solicitud.component';
import { ProveedorComponent } from './Componentes/proveedor/Add-Form/proveedor.component';
import { EditProveedorComponent } from './Componentes/proveedor/Edit-Form/edit-proveedor.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { EditSolicitudComponent } from './Componentes/solicitud/Edit-Form/edit-solicitud.component';
import { AppComponent } from './app.component';

import { LoginComponent } from './Componentes/login/login.component';
import { RegistrarComponent } from './Componentes/registrar/registrar.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SolicitudComponent,
    ProveedorComponent,
    EditProveedorComponent,
    EditSolicitudComponent,
    FilterSolicitudPipe,
    FilterProveedorPipe,
    LoginComponent,
    RegistrarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
