import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TodoItem} from './todoItem';
import { TODOITEMS } from './todo-mock';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  GetAll(): Observable<TodoItem[]> {
    return of(TODOITEMS);
  }

  Get(id: number): Observable<TodoItem> {
    return of(TODOITEMS.filter((item) => item.id === id)[0]);
  }
}
