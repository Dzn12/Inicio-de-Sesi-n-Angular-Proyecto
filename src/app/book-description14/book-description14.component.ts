import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-description14',
  templateUrl: './book-description14.component.html',
  styleUrls:['./book-description14.component.css']
})
export class BookDescription14Component {

  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
}
showFull: boolean = false;

toggleShow() {
  this.showFull = !this.showFull;
}
}
