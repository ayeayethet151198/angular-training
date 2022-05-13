import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe1'
})
export class Custompipe1Pipe implements PipeTransform {

  transform(value: number, exponent: number) {
    return Math.pow(value, exponent);
  }

}
