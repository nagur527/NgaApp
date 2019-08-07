import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('1#2 should return BC', () => {
    expect(service.getConvertedStr('1#2')).toBe('BC');
  });
  it('#### should return empty', () => {
    expect(service.getConvertedStr('####')).toBe('');
  });
});
