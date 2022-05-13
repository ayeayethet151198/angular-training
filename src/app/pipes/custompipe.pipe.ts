import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(n: number): string {
    return (n * 1000).toFixed(2) + 'Kg';
  }

}
