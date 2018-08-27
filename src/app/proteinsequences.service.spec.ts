import { TestBed, inject } from '@angular/core/testing';

import { ProteinsequencesService } from './proteinsequences.service';

describe('ProteinsequencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProteinsequencesService]
    });
  });

  it('should be created', inject([ProteinsequencesService], (service: ProteinsequencesService) => {
    expect(service).toBeTruthy();
  }));
});
