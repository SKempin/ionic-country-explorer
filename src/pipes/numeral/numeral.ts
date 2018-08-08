import { Pipe, PipeTransform } from '@angular/core';
import numeral from 'numeral';

// Utilise Numeral.js to format number values


@Pipe({
  name: 'numeralPipe',
})
export class NumeralPipe implements PipeTransform {
  transform(value: number, format: number) {
    return numeral(value).format(format);
  }
}
