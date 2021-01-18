import { TestBed } from '@angular/core/testing';
import { OyunserService } from './Oyunser.service';

describe('OyunserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OyunserService = TestBed.get(OyunserService);
    expect(service).toBeTruthy();
  });
});
