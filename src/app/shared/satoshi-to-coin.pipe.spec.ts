import { SatoshiToCoinPipe } from './satoshi-to-coin.pipe';

describe('SatoshiToCoinPipe', () => {
  it('create an instance', () => {
    const pipe = new SatoshiToCoinPipe();
    expect(pipe).toBeTruthy();
  });
});
