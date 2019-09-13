import * as moment from 'moment';

export interface TaskInterface {
  title: string;
  detail: string;
  beginDate?: moment.Moment;
  done?: boolean;
  priority?: number;
}
