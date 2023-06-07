import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ProveedorComponent } from './Componentes/proveedor/Add-Form/proveedor.component';
import {SolicitudComponent} from './Componentes/solicitud/Add-Form/solicitud.component'
import {EditSolicitudComponent} from './Componentes/solicitud/Edit-Form/edit-solicitud.component'
import { EditProveedorComponent } from './Componentes/proveedor/Edit-Form/edit-proveedor.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistrarComponent } from './Componentes/registrar/registrar.component';


const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path:'inicio' , component: InicioComponent},
  {path: 'add', component: SolicitudComponent},// agregar solicitud
  {path: 'edit/:solicitud_id', component: EditSolicitudComponent},  // editar editar solicitud
  {path: 'addP', component: ProveedorComponent}, //agregar proveedor
  {path: 'editP/:proveedor_id', component: EditProveedorComponent } // editar proveedor

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
