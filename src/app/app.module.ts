import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; // Agrega NgbCarouselModule aquí
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookDescriptionComponent } from './book-description/book-description.component';
import { CapituloComponent } from './Innovation_City/capitulo/capitulo.component';
import { Capitulo2Component } from './Innovation_City/capitulo2/capitulo2.component';
import { Capitulo3Component } from './Innovation_City/capitulo3/capitulo3.component';
import { FilterGendersComponent } from './filter-genders/filter-genders.component';
import { PopupComponent } from './popup/popup.component';
import { ComentarioService } from './comentario.service';
import { PerfilComponent } from './perfil/perfil.component';
import { AdministracionComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioSesionComponent,
    BienvenidoComponent,
    UpdateComponent,
    DashboardComponent,
    FooterComponent,
    BookDescriptionComponent,
    CapituloComponent,
    Capitulo2Component,
    Capitulo3Component,
    HeaderComponent,
    FilterGendersComponent,
    PopupComponent,
    PerfilComponent,
    AdministracionComponent
  ],
  imports: [
    AccordionModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    NgbModule,
    NgbCarouselModule // Agrega NgbCarouselModule aquí
  ],
  providers: [
    ComentarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
