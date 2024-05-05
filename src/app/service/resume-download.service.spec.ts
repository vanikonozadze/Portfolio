import { TestBed } from '@angular/core/testing';

import { ResumeDownloadService } from './resume-download.service';

describe('ResumeDownloadService', () => {
  let service: ResumeDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
