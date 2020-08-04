import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochToTimestamp',
})
export class EpochToTimestampPipe implements PipeTransform {
  transform(epoch: number): string {
    if (epoch) {
      return new Date(epoch * 1000).toString();
    } else {
      return '';
    }
  }
}
