
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },  // Ruta principal
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'bienvenido', component: BienvenidoComponent }, 
  { path: 'update', component: UpdateComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
