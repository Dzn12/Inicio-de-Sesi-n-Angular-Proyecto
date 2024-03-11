
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
import { CapituloComponent } from './capitulo/capitulo.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent }, // Ruta principal
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'bienvenido', component: BienvenidoComponent }, 
  { path: 'update', component: UpdateComponent }, 
  { path: 'book-description', component: BookDescriptionComponent }, 
  { path: 'book-description2', component: BookDescription2Component },
  { path: 'capitulo', component: CapituloComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
