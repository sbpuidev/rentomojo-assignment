import { TestBed } from '@angular/core/testing';

import { UsersblogService } from './usersblog.service';

describe('UsersblogService', () => {
  let service: UsersblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
