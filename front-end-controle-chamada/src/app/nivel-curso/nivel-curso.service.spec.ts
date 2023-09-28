import { TestBed } from '@angular/core/testing';

import { NivelCursoService } from './nivel-curso.service';

describe('NivelCursoService', () => {
  let service: NivelCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivelCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
