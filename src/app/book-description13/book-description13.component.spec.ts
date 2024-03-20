import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription13Component } from './book-description13.component';

describe('BookDescription13Component', () => {
  let component: BookDescription13Component;
  let fixture: ComponentFixture<BookDescription13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
