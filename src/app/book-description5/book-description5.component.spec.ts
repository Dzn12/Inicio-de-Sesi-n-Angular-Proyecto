import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription5Component } from './book-description5.component';

describe('BookDescription5Component', () => {
  let component: BookDescription5Component;
  let fixture: ComponentFixture<BookDescription5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
