import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGendersComponent } from './filter-genders.component';

describe('FilterGendersComponent', () => {
  let component: FilterGendersComponent;
  let fixture: ComponentFixture<FilterGendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGendersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterGendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
