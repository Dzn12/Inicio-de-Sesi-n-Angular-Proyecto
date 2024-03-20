import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription14Component } from './book-description14.component';

describe('BookDescription14Component', () => {
  let component: BookDescription14Component;
  let fixture: ComponentFixture<BookDescription14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
