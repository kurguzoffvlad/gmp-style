import { TestBed } from '@angular/core/testing';

import { GmpStyleService } from './gmp-style.service';

describe('GmpStyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpStyleService = TestBed.get(GmpStyleService);
    expect(service).toBeTruthy();
  });
});
