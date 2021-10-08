import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yeartoage'
})
export class YeartoagePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let age = 0;
    age = args[0] - value;
    return age;
  }

}
