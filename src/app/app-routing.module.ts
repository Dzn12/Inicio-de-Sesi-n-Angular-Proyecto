
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDescriptionComponent } from './book-description/book-description.component';
import { CapituloComponent } from './Innovation_City/capitulo/capitulo.component';
import { Capitulo2Component } from './Innovation_City/capitulo2/capitulo2.component';
import { Capitulo3Component } from './Innovation_City/capitulo3/capitulo3.component';
import { HeaderComponent } from './header/header.component';
import { FilterGendersComponent } from './filter-genders/filter-genders.component';
import { PopupComponent } from './popup/popup.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdministracionComponent } from './admin/admin.component';
const routes: Routes = [
  { path: '', component: BienvenidoComponent }, // Ruta principal
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'bienvenido', component: BienvenidoComponent }, 
  { path: 'update', component: UpdateComponent }, 
  { path: 'book-description/:id', component: BookDescriptionComponent },
  { path: 'Innovation_City/capitulo', component: CapituloComponent },
  { path: 'Innovation_City/capitulo2', component: Capitulo2Component },
  { path: 'Innovation_City/capitulo3', component: Capitulo3Component },
  {path : 'header' , component: HeaderComponent},
  {path : 'filter-genders', component: FilterGendersComponent},
  {path : 'popup', component : PopupComponent},
  {path : 'perfil', component : PerfilComponent},
  {path : 'admin', component : AdministracionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
