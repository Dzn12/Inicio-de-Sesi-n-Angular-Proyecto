import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls : ['./book-description.component.css']
})
export class BookDescriptionComponent {
	constructor(config: NgbAccordionConfig) {
		// customize default values of accordions used by this component tree
		config.closeOthers = true;
}
}


