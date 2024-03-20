import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription8Component } from './book-description8.component';

describe('BookDescription8Component', () => {
  let component: BookDescription8Component;
  let fixture: ComponentFixture<BookDescription8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
