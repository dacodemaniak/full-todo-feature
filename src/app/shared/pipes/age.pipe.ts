import { Pipe, PipeTransform } from '@angular/core';

// Import the whole moment package from node_modules/moment
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  public constructor(private httpClient: HttpClient) {}

  transform(value: any, ...args: any[]): Promise<string> {

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

    return this.getTheAgeOfTheCaptain(
      value,
      format,
      pluralize
    );


  }

  private getTheAgeOfTheCaptain(
      fromThePipe: string,
      format: moment.unitOfTime.Diff,
      pluralize: boolean
  ): Promise<any> {

    let today: moment.Moment;

    return new Promise((resolve) => {
      this.httpClient.get<any>(
        'http://worldclockapi.com/api/json/utc/now'
      ).subscribe((response: any) => {
        today = moment(response.currentDateTime);
        const birthDate: moment.Moment = moment(fromThePipe);

        // Get difference between two dates with moment
        const theAge: number = today.diff(birthDate, format);

        const output: string =  this.toString(theAge, pluralize, format.toString());
        resolve(output);
      }, (error) => {
        resolve(fromThePipe);
      });
    });
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
