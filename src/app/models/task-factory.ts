import { Task } from './task';
import { TaskInterface } from './task-interface';

export class TaskFactory {
  public static singleTask(detail: TaskInterface): Task {
    const singleTask: Task = new Task();
    singleTask.title = detail.title;
    singleTask.detail = detail.detail;

    if (detail.hasOwnProperty('beginDate')) {
      singleTask.beginDate = detail.beginDate;
    }

    if (detail.hasOwnProperty('priority')) {
      singleTask.priority = detail.priority;
    }

    return singleTask;
  }

  public static highPriotityTask(detail: TaskInterface): Task {
    const singleTask: Task = new Task();
    singleTask.title = detail.title;
    singleTask.detail = detail.detail;
    singleTask.priority = detail.priority;

    if (detail.hasOwnProperty('beginDate')) {
      singleTask.beginDate = detail.beginDate;
    }

    return singleTask;
  }

  public static expectedTask(detail: TaskInterface): Task {
    const singleTask: Task = new Task();
    singleTask.title = detail.title;
    singleTask.detail = detail.detail;
    singleTask.beginDate = detail.beginDate;

    if (detail.hasOwnProperty('priority')) {
      singleTask.priority = detail.priority;
    }
    return singleTask;
  }
}
