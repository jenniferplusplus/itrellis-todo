import {Injectable} from '@angular/core';
import {Observable, of, BehaviorSubject} from 'rxjs';
import {first, map} from 'rxjs/operators';

import {TodoItem} from './todoItem';
import {TODOITEMS} from './todo-mock';
import {e} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  subject: BehaviorSubject<TodoItem[]> = new BehaviorSubject(TODOITEMS);
  observable: Observable<TodoItem[]> = this.subject.asObservable();

  constructor() {
  }

  GetAll(): Observable<TodoItem[]> {
    return this.observable;
  }

  Get(id: number): Observable<TodoItem> {
    return this.observable
      .pipe(
        first(),
        map((items: TodoItem[]) => {
          return items.filter(item => item.id === id)[0];
        }));
  }

  Add(newItem: TodoItem): void {
    this.observable
      .pipe(
        first(),
        map((list) => list.concat(newItem))
      )
      .subscribe(value => this.subject.next(value));
  }

  Edit(editItem: TodoItem): void {
    this.observable
      .pipe(first())
      .subscribe(value => {
        const index = value.findIndex(item => item.id === editItem.id);
        const existing = value[index];
        value[index] = {...existing, ...editItem};

        this.subject.next(value);
      });
  }

  Delete(delItem: TodoItem): void {
    this.observable
      .pipe(first())
      .subscribe(value => {
        const list = value.filter(item => item !== delItem);

        this.subject.next(list);
      });
  }
}
