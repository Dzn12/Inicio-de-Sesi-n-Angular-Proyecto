import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription15Component } from './book-description15.component';

describe('BookDescription15Component', () => {
  let component: BookDescription15Component;
  let fixture: ComponentFixture<BookDescription15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
