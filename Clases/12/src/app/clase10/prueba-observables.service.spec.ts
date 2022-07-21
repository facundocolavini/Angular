import { TestBed } from '@angular/core/testing';

import { PruebaObservablesService } from './prueba-observables.service';

describe('PruebaObservablesService', () => {
  let service: PruebaObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
