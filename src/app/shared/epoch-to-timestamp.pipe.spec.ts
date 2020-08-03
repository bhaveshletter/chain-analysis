import { EpochToTimestampPipe } from './epoch-to-timestamp.pipe';

describe('EpochToTimestampPipe', () => {
  it('create an instance', () => {
    const pipe = new EpochToTimestampPipe();
    expect(pipe).toBeTruthy();
  });
});
