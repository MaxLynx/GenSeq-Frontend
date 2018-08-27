import { TestBed, inject } from '@angular/core/testing';

import { RnasequencesService } from './rnasequences.service';

describe('RnasequencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RnasequencesService]
    });
  });

  it('should be created', inject([RnasequencesService], (service: RnasequencesService) => {
    expect(service).toBeTruthy();
  }));
});
