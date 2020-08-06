import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochToTimestamp',
})
export class EpochToTimestampPipe implements PipeTransform {
  transform(epoch: number): string {
    if (typeof epoch == 'number') {
      return (epoch * 1000).toString();
    } else {
      return '';
    }
  }
}
