import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date): string {
    // transforme la date au format dd-mm-yyyy
    return `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
  }

}
