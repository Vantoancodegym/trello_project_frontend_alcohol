import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoardTagUserComponent } from './list-board-tag-user.component';

describe('ListBoardTagUserComponent', () => {
  let component: ListBoardTagUserComponent;
  let fixture: ComponentFixture<ListBoardTagUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBoardTagUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoardTagUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
