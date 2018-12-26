import { TestBed } from '@angular/core/testing';

import { StarwarsService } from './starwars.service';

describe('StarwarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsService = TestBed.get(StarwarsService);
    expect(service).toBeTruthy();
  });
});
