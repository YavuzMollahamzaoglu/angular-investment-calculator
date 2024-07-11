import { TestBed } from '@angular/core/testing';

import { InvestmentServiceTsService } from './investment.service.ts.service';

describe('InvestmentServiceTsService', () => {
  let service: InvestmentServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
