import { TestBed, async, inject } from '@angular/core/testing';

import { CommonAuthGuard } from './common-auth.guard';

describe('CommonAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonAuthGuard]
    });
  });

  it('should ...', inject([CommonAuthGuard], (guard: CommonAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
