import { TestBed } from '@angular/core/testing';

import { BattlescribeParserService } from './battlescribe-parser.service';

describe('BattlescribeParserService', () => {
  let service: BattlescribeParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattlescribeParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
