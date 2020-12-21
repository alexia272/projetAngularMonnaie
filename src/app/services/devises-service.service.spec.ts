import { TestBed } from '@angular/core/testing';

import { DevisesServiceService } from './devises-service.service';

describe('DevisesServiceService', () => {
  let service: DevisesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevisesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
