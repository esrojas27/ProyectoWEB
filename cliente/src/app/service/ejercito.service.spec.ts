import { TestBed } from '@angular/core/testing';

import { EjercitoService } from './ejercito.service';

describe('EjercitoService', () => {
  let service: EjercitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjercitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
