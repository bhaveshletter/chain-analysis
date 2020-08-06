import { EpochToTimestampPipe } from './epoch-to-timestamp.pipe';
import { async } from '@angular/core/testing';

describe('EpochToTimestampPipe', () => {
  var pipe = new EpochToTimestampPipe();

  beforeEach(async(() => {
    pipe = new EpochToTimestampPipe();
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should returns empty string if epoch is not a number', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should returns equal milli seconds in string of epoch\'s seconds', () => {
    let datetime = new Date(),
      seconds = datetime.getSeconds(),
      milliSeconds = (seconds * 1000).toString();

    expect(pipe.transform(seconds)).toBe(milliSeconds);
  });
});
