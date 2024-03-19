import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-description2',
  templateUrl: './book-description2.component.html',
  styleUrls : ['./book-description2.component.css']
})
export class BookDescription2Component {
	constructor(config: NgbAccordionConfig) {
		// customize default values of accordions used by this component tree
		config.closeOthers = true;
}
showFull: boolean = false;
saved: boolean = false; // Agregar una variable para indicar si el libro está guardado


toggleShow() {
  this.showFull = !this.showFull;
}
saveBook() {
  this.saved = true; // Marcar el libro como guardado
}
}

