import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo3Component } from './capitulo3.component';

describe('Capitulo3Component', () => {
  let component: Capitulo3Component;
  let fixture: ComponentFixture<Capitulo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Capitulo3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Capitulo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
