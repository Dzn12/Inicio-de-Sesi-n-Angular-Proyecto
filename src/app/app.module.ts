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
    BookDescription2Component,
    BookDescription3Component,
    BookDescription4Component,
    BookDescription5Component,
    BookDescription6Component,
    BookDescription7Component,
    BookDescription8Component,
    BookDescription9Component,
    BookDescription10Component,
    BookDescription11Component,
    BookDescription12Component,
    BookDescription13Component,
    BookDescription14Component,
    BookDescription15Component,
    CapituloComponent,
    Capitulo2Component,
    Capitulo3Component,
    HeaderComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
