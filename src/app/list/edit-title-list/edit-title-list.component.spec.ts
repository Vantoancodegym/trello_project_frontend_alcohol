import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTitleListComponent } from './edit-title-list.component';

describe('EditTitleListComponent', () => {
  let component: EditTitleListComponent;
  let fixture: ComponentFixture<EditTitleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTitleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTitleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
