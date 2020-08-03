import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochToTimestamp',
})
export class EpochToTimestampPipe implements PipeTransform {
  transform(epoch: number): Date {
    return new Date(epoch * 1000);
  }
}
