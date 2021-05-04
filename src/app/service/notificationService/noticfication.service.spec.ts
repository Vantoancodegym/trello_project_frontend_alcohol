import { TestBed } from '@angular/core/testing';

import { NoticficationService } from './noticfication.service';

describe('NoticficationService', () => {
  let service: NoticficationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticficationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
