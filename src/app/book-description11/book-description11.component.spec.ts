import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription11Component } from './book-description11.component';

describe('BookDescription11Component', () => {
  let component: BookDescription11Component;
  let fixture: ComponentFixture<BookDescription11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
