import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription6Component } from './book-description6.component';

describe('BookDescription6Component', () => {
  let component: BookDescription6Component;
  let fixture: ComponentFixture<BookDescription6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
