import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription7Component } from './book-description7.component';

describe('BookDescription7Component', () => {
  let component: BookDescription7Component;
  let fixture: ComponentFixture<BookDescription7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
