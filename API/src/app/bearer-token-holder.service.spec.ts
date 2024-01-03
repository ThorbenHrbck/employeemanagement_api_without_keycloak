import { TestBed } from '@angular/core/testing';

import { BearerTokenHolderService } from './bearer-token-holder.service';

describe('BearerTokenHolderService', () => {
  let service: BearerTokenHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BearerTokenHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
