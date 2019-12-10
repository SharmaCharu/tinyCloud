import { TestBed } from '@angular/core/testing';

import { TinyServiceService } from './tiny-s.service';

describe('TinyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TinyServiceService = TestBed.get(TinyServiceService);
    expect(service).toBeTruthy();
  });
});
