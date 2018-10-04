import {TestBed} from '@angular/core/testing';

import {TodoListService} from './todo-list.service';
import {TodoItem} from './todoItem';
import {HttpClientModule} from '@angular/common/http';
import {skip} from 'rxjs/operators';
import {TodoItemsApiService} from './todo-items.api.service';
import {of} from 'rxjs';
import {TODOITEMS} from './todo-mock';

describe('TodoListService', () => {
  let service: TodoListService;
  let mockApiService: any;

  beforeAll((() => {
    // const apiService = TestBed.get(TodoItemsApiService);
    mockApiService = jasmine.createSpyObj('TodoItemsApiService', ['getAll', 'getOne']);
    mockApiService.getAll.and.returnValue(of(TODOITEMS));
    mockApiService.getOne.and.returnValue(of(TODOITEMS[2]));
  }));

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [{provide: TodoItemsApiService, useValue: mockApiService}]
  }));
  beforeEach(() => {
    service = TestBed.get(TodoListService);
    service.subject.next(TODOITEMS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give a list of TodoItems', (done) => {
    service.GetAll()
      .subscribe((list) => {
        expect(list[0] instanceof TodoItem).toBe(true);

        done();
      });
  });

  it('should give a single todoItem by id', (done) => {
    service.Get(2)
      .subscribe((todoItem) => {
        expect(todoItem).toBeDefined();
        expect(todoItem.id).toBe(2);

        done();
      });
  });
});
