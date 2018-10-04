import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { TodoItem } from './todo/todoItem';
import { TODOITEMS} from './todo/todo-mock';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const todoItems = TODOITEMS;

    return {todoItems};
  }

  genId(todoItems: TodoItem[]): number {
    return todoItems.length > 0 ? Math.max(...todoItems.map(item => item.id)) + 1 : 1;
  }

  constructor() { }
}
