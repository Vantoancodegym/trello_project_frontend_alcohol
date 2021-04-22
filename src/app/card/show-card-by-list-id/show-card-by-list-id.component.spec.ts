import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardByListIdComponent } from './show-card-by-list-id.component';

describe('ShowCardByListIdComponent', () => {
  let component: ShowCardByListIdComponent;
  let fixture: ComponentFixture<ShowCardByListIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCardByListIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCardByListIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
