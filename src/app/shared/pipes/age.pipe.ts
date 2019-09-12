import { Pipe, PipeTransform } from '@angular/core';

// Import the whole moment package from node_modules/moment
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {


  transform(value: any, ...args: any[]): any {
    // Fake current date
    const today: moment.Moment = moment();

    let format: moment.unitOfTime.Diff = 'year';
    let pluralize: boolean = false;


    // What's args...
    if (args) {
       const arg: any = args[0];
       format = arg.format;
       if (arg.hasOwnProperty('pluralize')) {
         pluralize = true;
       }
    }

    // Convert string date in Moment date (value <=> user.birthDate for example)
    const birthDate: moment.Moment = moment(value);

    // Get difference between two dates with moment
    const theAge: number = today.diff(birthDate, format);

    return this.toString(theAge, pluralize, format.toString());
  }

  private toString(age: number, pluralize: boolean, format: string) {
    if (age <= 1) {
      if (pluralize) {
        if (format === 'year') {
          return age + ' an';
        } else {
          return age + ' mois';
        }
      } else {
        if (format === 'year') {
          return age + ' an(s)';
        } else {
          return age + ' mois';
        }
      }
    } else {
      if (pluralize) {
        if (format === 'year') {
          return age + ' ans';
        } else {
          return age + ' mois';
        }
      } else {
        if (format === 'year') {
          return age + ' an(s)';
        } else {
          return age + ' mois';
        }
      }
    }
  }

}
