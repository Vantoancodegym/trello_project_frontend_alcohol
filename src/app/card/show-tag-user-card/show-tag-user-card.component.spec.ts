import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTagUserCardComponent } from './show-tag-user-card.component';

describe('ShowTagUserCardComponent', () => {
  let component: ShowTagUserCardComponent;
  let fixture: ComponentFixture<ShowTagUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTagUserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTagUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
