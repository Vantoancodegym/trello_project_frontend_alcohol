import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCardUserComponent } from './filter-card-user.component';

describe('FilterCardUserComponent', () => {
  let component: FilterCardUserComponent;
  let fixture: ComponentFixture<FilterCardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
