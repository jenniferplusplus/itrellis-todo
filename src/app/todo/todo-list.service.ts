import { Injectable } from '@angular/core';
import { TodoItem} from './todoItem';
import { TODOITEMS } from './todo-mock';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  GetAll(): TodoItem[] {
    return TODOITEMS;
  }

  Get(id: number) {
    return TODOITEMS.filter((item) => item.id === id)[0];
  }
}
