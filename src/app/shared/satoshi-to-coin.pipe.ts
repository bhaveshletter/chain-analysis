import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'satoshiToCoin',
})
export class SatoshiToCoinPipe implements PipeTransform {
  transform(satoshi: number): number {
    if (typeof satoshi == 'number') {
      return satoshi / 100000000;
    } else {
      return 0;
    }
  }
}
