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

  it('should give a list of TodoItems', (done) => {
    service.GetAll().subscribe((list) => {
      expect(list[0] instanceof TodoItem).toBe(true);

      done();
    });
  });

  it('should give a single todoItem by id', (done) => {
    service.Get(2).subscribe((todoItem) => {
      expect(todoItem).toBeDefined();
      expect(todoItem.id).toBe(2);

      done();
    });
  });
});
