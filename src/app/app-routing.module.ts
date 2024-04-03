
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDescriptionComponent } from './book-description/book-description.component';
import { BookDescription2Component } from './book-description2/book-description2.component';
import { BookDescription3Component } from './book-description3/book-description3.component';
import { BookDescription4Component } from './book-description4/book-description4.component';
import { CapituloComponent } from './capitulo/capitulo.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent }, // Ruta principal
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'bienvenido', component: BienvenidoComponent }, 
  { path: 'update', component: UpdateComponent }, 
  { path: 'book-description', component: BookDescriptionComponent }, 
  { path: 'book-description2', component: BookDescription2Component },
  { path: 'book-description3', component: BookDescription3Component },
  { path: 'book-description4', component: BookDescription4Component },
  { path: 'capitulo', component: CapituloComponent }, 
  {path : 'header' , component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
