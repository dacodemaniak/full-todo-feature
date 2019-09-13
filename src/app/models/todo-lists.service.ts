import { Injectable } from '@angular/core';
import { TodoList } from './todo-list';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { RepositoryInterface } from './repository-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoListsService implements RepositoryInterface<TodoList> {

  public static readonly KEY: string = 'todolists';

  private collection: Map<number, TodoList>;

  constructor(private storage: LocalStorageService) {
    this.collection = new Map<number, TodoList>();
  }

  public add(todoList: TodoList): void {
    todoList.id = this.collection.size + 1;
    this.collection.set(todoList.id, todoList);

    // Store it...
    this.storage.set(TodoListsService.KEY, this.toArray());
  }

  public update(todoList: TodoList): void {
    this.collection.set(todoList.id, todoList);

    // Store it...
    this.storage.set(TodoListsService.KEY, this.toArray());
  }

  public delete(todoList: TodoList): void {
    this.collection.delete(todoList.id);

    // Store it...
    this.storage.set(TodoListsService.KEY, this.toArray());
  }

  public toArray(): Array<any> {
    const values: Array<any> = new Array();

    this.collection.forEach((todoList: TodoList, key: number) => {
      // 1. Convert a todo in JSONIFY
      let jsonify: any = {
        _title: todoList.name,
        _tasks: todoList.getTasks()
      };
      values.push(jsonify);
    });
    return values;
  }
}
