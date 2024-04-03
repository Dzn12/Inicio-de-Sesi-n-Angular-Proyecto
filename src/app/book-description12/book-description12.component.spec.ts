import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescription12Component } from './book-description12.component';

describe('BookDescription12Component', () => {
  let component: BookDescription12Component;
  let fixture: ComponentFixture<BookDescription12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescription12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescription12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
