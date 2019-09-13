import { TestBed } from '@angular/core/testing';

import { TodoListsService } from './todo-lists.service';

describe('TodoListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListsService = TestBed.get(TodoListsService);
    expect(service).toBeTruthy();
  });
});
