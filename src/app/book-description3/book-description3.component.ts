import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-description3',
  templateUrl: './book-description3.component.html',
  styleUrls: ['./book-description3.component.css']
})
export class BookDescription3Component {

    constructor(config: NgbAccordionConfig) {
      // customize default values of accordions used by this component tree
      config.closeOthers = true;
  }
  showFull: boolean = false;
  saved: boolean = false;

  toggleShow() {
    this.showFull = !this.showFull;
  }

saveBook() {
  this.saved = true; // Marcar el libro como guardado
}

}




