import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {first, map} from 'rxjs/operators';

import {TodoItem} from './todoItem';
import {TodoItemsApiService} from './todo-items.api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  subject: BehaviorSubject<TodoItem[]> = new BehaviorSubject([]);
  observable: Observable<TodoItem[]> = this.subject.asObservable();

  constructor(private api: TodoItemsApiService) {
  }

  GetAll(): Observable<TodoItem[]> {
    this.api.getAll()
      .subscribe(value => {
        this.subject.next(value);
      });
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
    this.api.addOne(newItem)
      .subscribe(_ => {
        this.observable
          .pipe(
            first(),
            map((list) => list.concat(_))
          )
          .subscribe(value => this.subject.next(value));
      });
  }

  Edit(editItem: TodoItem): Observable<TodoItem> {
    const edit$ = this.api.updateOne(editItem);
    edit$.subscribe(_ => {
      this.observable
        .pipe(first())
        .subscribe(value => {
          const index = value.findIndex(item => item.id === editItem.id);
          const existing = value[index];
          value[index] = {...existing, ...editItem};

          this.subject.next(value);
        });
    });

    return edit$;
  }

  Delete(delItem: TodoItem): void {
    this.api.deleteOne(delItem)
      .subscribe(_ => {
        this.observable
          .pipe(first())
          .subscribe(value => {
            const list = value.filter(item => item !== delItem);

            this.subject.next(list);
          });
      });
  }
}
