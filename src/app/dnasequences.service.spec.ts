import { TestBed, inject } from '@angular/core/testing';

import { DnasequencesService } from './dnasequences.service';

describe('DnasequencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DnasequencesService]
    });
  });

  it('should be created', inject([DnasequencesService], (service: DnasequencesService) => {
    expect(service).toBeTruthy();
  }));
});
