
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
import { BookDescription5Component } from './book-description5/book-description5.component';
import { BookDescription6Component } from './book-description6/book-description6.component';
import { BookDescription7Component } from './book-description7/book-description7.component';
import { BookDescription8Component } from './book-description8/book-description8.component';
import { BookDescription9Component } from './book-description9/book-description9.component';
import { BookDescription10Component } from './book-description10/book-description10.component';
import { BookDescription11Component } from './book-description11/book-description11.component';
import { BookDescription12Component } from './book-description12/book-description12.component';
import { BookDescription13Component } from './book-description13/book-description13.component';
import { BookDescription14Component } from './book-description14/book-description14.component';
import { BookDescription15Component } from './book-description15/book-description15.component';
import { CapituloComponent } from './Innovation_City/capitulo/capitulo.component';
import { Capitulo2Component } from './Innovation_City/capitulo2/capitulo2.component';
import { Capitulo3Component } from './Innovation_City/capitulo3/capitulo3.component';
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
  { path: 'book-description5', component: BookDescription5Component },
  { path: 'book-description6', component: BookDescription6Component },
  { path: 'book-description7', component: BookDescription7Component},
  { path: 'book-description8', component: BookDescription8Component},
  { path: 'book-description9', component: BookDescription9Component},
  { path: 'book-description10', component: BookDescription10Component},
  { path: 'book-description11', component: BookDescription11Component},
  { path: 'book-description12', component: BookDescription12Component},
  { path: 'book-description13', component: BookDescription13Component},
  { path: 'book-description14', component: BookDescription14Component},
  { path: 'book-description15', component: BookDescription15Component},
  { path: 'Innovation_City/capitulo', component: CapituloComponent },
  { path: 'Innovation_City/capitulo2', component: Capitulo2Component },
  { path: 'Innovation_City/capitulo3', component: Capitulo3Component },
  {path : 'header' , component: HeaderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
