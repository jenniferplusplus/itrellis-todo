import {TestBed} from '@angular/core/testing';

import {TodoListService} from './todo-list.service';
import {TodoItem} from './todoItem';

describe('TodoListService', () => {
  let service: TodoListService;
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    service = TestBed.get(TodoListService);
  });

  it('should be created', () => {
    // const service: TodoListService = TestBed.get(TodoListService);
    expect(service).toBeTruthy();
  });

  it('should give a list of TodoItems', () => {
    expect(service.GetAll()[0] instanceof TodoItem).toBe(true);
  });

  it('should give a single item by id', () => {
    const todoItem = service.Get(2);
    expect(todoItem).toBeDefined();
    expect(todoItem.id).toBe(2);
  });
});
