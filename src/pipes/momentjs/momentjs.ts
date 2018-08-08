import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

// Utilise Moment.js to format date strings


@Pipe({
  name: 'momentjsPipe',
})
export class MomentjsPipe implements PipeTransform {

  transform(value: string, dateFormat: string) {
    return moment(value).format(dateFormat);
  }
}
