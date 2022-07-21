import { TestBed } from '@angular/core/testing';

import { DatosAlumnosService } from './datos-alumnos.service';

describe('DatosAlumnosService', () => {
  let service: DatosAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
