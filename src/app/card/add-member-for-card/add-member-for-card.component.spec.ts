import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberForCardComponent } from './add-member-for-card.component';

describe('AddMemberForCardComponent', () => {
  let component: AddMemberForCardComponent;
  let fixture: ComponentFixture<AddMemberForCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMemberForCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberForCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
