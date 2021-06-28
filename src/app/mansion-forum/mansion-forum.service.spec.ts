import { TestBed } from '@angular/core/testing';
import { MansionForumService } from './mansion-forum.service';

describe('MansionForumService', () => {
  let service: MansionForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MansionForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
