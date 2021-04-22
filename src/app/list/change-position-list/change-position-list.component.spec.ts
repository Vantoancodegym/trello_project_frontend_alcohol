import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePositionListComponent } from './change-position-list.component';

describe('ChangePositionListComponent', () => {
  let component: ChangePositionListComponent;
  let fixture: ComponentFixture<ChangePositionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePositionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
