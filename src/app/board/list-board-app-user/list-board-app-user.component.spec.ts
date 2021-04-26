import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoardAppUserComponent } from './list-board-app-user.component';

describe('ListBoardAppUserComponent', () => {
  let component: ListBoardAppUserComponent;
  let fixture: ComponentFixture<ListBoardAppUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBoardAppUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoardAppUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
