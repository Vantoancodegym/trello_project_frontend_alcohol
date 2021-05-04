import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCardLabelComponent } from './filter-card-label.component';

describe('FilterCardLabelComponent', () => {
  let component: FilterCardLabelComponent;
  let fixture: ComponentFixture<FilterCardLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCardLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCardLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
