import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagUserBoardComponent } from './tag-user-board.component';

describe('TagUserBoardComponent', () => {
  let component: TagUserBoardComponent;
  let fixture: ComponentFixture<TagUserBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagUserBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagUserBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
