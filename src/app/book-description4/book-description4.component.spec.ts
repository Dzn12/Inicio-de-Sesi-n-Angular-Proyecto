import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription4Component } from './book-description4.component';

describe('BookDescription4Component', () => {
  let component: BookDescription4Component;
  let fixture: ComponentFixture<BookDescription4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
