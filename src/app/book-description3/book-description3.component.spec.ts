import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription3Component } from './book-description3.component';

describe('BookDescription3Component', () => {
  let component: BookDescription3Component;
  let fixture: ComponentFixture<BookDescription3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
