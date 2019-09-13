import * as moment from 'moment';
import { MatInput } from '@angular/material';

export class Task {

  private _id: number;
  private _title: string;
  private _detail: string;
  private _beginDate?: moment.Moment;
  private _done? : boolean;
  private _priority?: number;

  public constructor() {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }
  public set title(title: string) {
    this._title = title;
  }

  public get detail(): string {
    return this._detail;
  }
  public set detail(detail: string) {
    this._detail = detail;
  }

  public get beginDate(): moment.Moment {
    return this._beginDate;
  }

  public set beginDate(beginDate: moment.Moment) {
    this._beginDate = beginDate;
  }

  public isDone(): boolean {
    return this._done === null || !this._done ? false : true;
  }

  public toggleDoneStatus(): void {
    this._done = !this._done;
  }

  public get priority(): number {
    return this._priority === null ? 0 : this._priority;
  }

  public set priority(priority: number) {
    this._priority = priority;
  }

}
