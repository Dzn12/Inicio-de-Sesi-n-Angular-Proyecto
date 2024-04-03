import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription10Component } from './book-description10.component';

describe('BookDescription10Component', () => {
  let component: BookDescription10Component;
  let fixture: ComponentFixture<BookDescription10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
