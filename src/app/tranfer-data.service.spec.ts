import { TestBed } from '@angular/core/testing';

import { TranferDataService } from './tranfer-data.service';

describe('TranferDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranferDataService = TestBed.get(TranferDataService);
    expect(service).toBeTruthy();
  });
});
