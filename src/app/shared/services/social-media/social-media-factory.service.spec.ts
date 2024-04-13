import { TestBed } from '@angular/core/testing';

import { SocialMediaFactoryService } from './social-media-factory.service';

describe('SocialMediaFactoryService', () => {
  let service: SocialMediaFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialMediaFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
