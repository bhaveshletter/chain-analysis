import { SatoshiToCoinPipe } from './satoshi-to-coin.pipe';
import { async } from '@angular/core/testing';

describe('SatoshiToCoinPipe', () => {
  let pipe = new SatoshiToCoinPipe();

  beforeEach(async(() => {
    pipe = new SatoshiToCoinPipe();
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should returns 0 coin if satoshi is not a number', () => {
    expect(pipe.transform(null)).toEqual(0);
  });

  it('should returns 1 coin if satoshi is 100000000', () => {
    expect(pipe.transform(100000000)).toEqual(1);
  });
});
