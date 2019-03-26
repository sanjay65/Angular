import { TestBed } from '@angular/core/testing';

import { FieldServicesService } from './field-services.service';

describe('FieldServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FieldServicesService = TestBed.get(FieldServicesService);
    expect(service).toBeTruthy();
  });
});
