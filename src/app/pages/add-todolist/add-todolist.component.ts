import { Component, OnInit } from '@angular/core';
import { TodoListsService } from 'src/app/models/todo-lists.service';
import { TodoList } from 'src/app/models/todo-list';
import { TaskFactory } from 'src/app/models/task-factory';
import * as moment from 'moment';

@Component({
  selector: 'app-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.scss']
})
export class AddTodolistComponent implements OnInit {

  constructor(private todoLists: TodoListsService) { }

  ngOnInit() {
    // 1. Create a brand new TodoList
    const todoList: TodoList = new TodoList();
    todoList.name = 'Une liste de choses à faire';

    // 2. Add some tasks to the TodoList
    todoList.setTask(
      TaskFactory.singleTask(
        {
          title: 'Tâche 1',
          detail: 'Un truc à faire parmi tant d\'autres'
        }
      )
    ).setTask(
      TaskFactory.highPriotityTask({
        title: 'Tâche haute priorité',
        detail: 'Un truc vraiment important',
        priority: 5
      })
    ).setTask(
      TaskFactory.expectedTask({
        title: 'Quand j\'aurais le temps',
        detail: 'Remis aux calendes grecques',
        beginDate: moment('2020-05-31')
      })
    );

    // Then send it to Repository
    this.todoLists.add(todoList);
  }

}
