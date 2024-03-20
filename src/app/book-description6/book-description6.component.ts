import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-description6',
  templateUrl: './book-description6.component.html',
  styleUrls: ['./book-description6.component.css']
})
export class BookDescription6Component {

  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
}
showFull: boolean = false;

toggleShow() {
  this.showFull = !this.showFull;
}
}

