// date-format.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'brDateFormat'
})
export class BrDateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const datePipe: DatePipe = new DatePipe('en-US');
    value = datePipe.transform(value, 'yyyy-MM-dd');
    return value.split('-').reverse().join('/');
  }

}
