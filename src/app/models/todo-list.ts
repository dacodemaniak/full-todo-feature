import { Task } from './task';

export class TodoList {
  private _id: number;
  private _name: string;
  private _tasks: Map<number, Task>;

  public constructor() {
    this._tasks = new Map<number, Task>();
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public setTask(task: Task): TodoList {
    // Just put the id of the Task before to store it
    task.id = this._tasks.size + 1;

    this._tasks.set(task.id, task);
    return this;
  }

  public removeTask(task: Task): TodoList {
    this._tasks.delete(task.id);
    return this;
  }

  public getTasks(): Array<Task> {
    return Array.from(this._tasks.values());
  }
}
