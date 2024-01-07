import { TestBed } from '@angular/core/testing';

import { AuntGuardGuard } from './aunt.guard.guard';

describe('AuntGuardGuard', () => {
  let guard: AuntGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuntGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
