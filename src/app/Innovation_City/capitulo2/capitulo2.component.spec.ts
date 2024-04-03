import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo2Component } from './capitulo2.component';

describe('Capitulo2Component', () => {
  let component: Capitulo2Component;
  let fixture: ComponentFixture<Capitulo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Capitulo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Capitulo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
