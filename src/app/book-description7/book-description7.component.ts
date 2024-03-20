import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-description7',
  templateUrl: './book-description7.component.html',
  styleUrls: ['./book-description7.component.css']
})
export class BookDescription7Component {
  
  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
}
showFull: boolean = false;

toggleShow() {
  this.showFull = !this.showFull;
}
}

