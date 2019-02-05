import { TestBed } from '@angular/core/testing';

import { ApplyNewServiceService } from './apply-new-service.service';

describe('ApplyNewServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplyNewServiceService = TestBed.get(ApplyNewServiceService);
    expect(service).toBeTruthy();
  });
});
