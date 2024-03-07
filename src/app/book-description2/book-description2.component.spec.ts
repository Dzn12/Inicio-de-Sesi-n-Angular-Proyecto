import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription2Component } from './book-description2.component';

describe('BookDescription2Component', () => {
  let component: BookDescription2Component;
  let fixture: ComponentFixture<BookDescription2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
