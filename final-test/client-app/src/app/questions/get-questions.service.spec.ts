import { TestBed } from '@angular/core/testing';

import { GetQuestionsService } from './get-questions.service';

describe('GetQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetQuestionsService = TestBed.get(GetQuestionsService);
    expect(service).toBeTruthy();
  });
});
