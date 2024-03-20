import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription9Component } from './book-description9.component';

describe('BookDescription9Component', () => {
  let component: BookDescription9Component;
  let fixture: ComponentFixture<BookDescription9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
