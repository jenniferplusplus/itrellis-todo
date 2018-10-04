import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {TodoItem} from './todoItem';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoItemsApiService {
  serviceUrl = 'api/todoItems';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.serviceUrl)
      .pipe(catchError(this.handleError<TodoItem[]>('getAll', [])));
  }

  getOne(id: number): Observable<TodoItem> {
    return this.http.get<TodoItem>(`${this.serviceUrl}/${id}`)
      .pipe(catchError(this.handleError<TodoItem>('getOne')));
  }

  updateOne(todoItem: TodoItem): Observable<any> {
    return this.http.put(`${this.serviceUrl}/${todoItem.id}`, todoItem, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated item id=${todoItem.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  addOne(todoItem: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.serviceUrl, todoItem, this.httpOptions)
      .pipe(
        tap((todo: TodoItem) => console.log(`added todo w/ id=${todo.id}`)),
        catchError(this.handleError<TodoItem>('addHero'))
      );
  }

  deleteOne(todoItem: TodoItem | number): Observable<TodoItem> {
    const id = typeof todoItem === 'number' ? todoItem : todoItem.id;
    const url = `${this.serviceUrl}/${id}`;

    return this.http.delete<TodoItem>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`deleted item id=${id}`)),
        catchError(this.handleError<TodoItem>('deleteHero'))
      );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);

      return of(result as T);
    };
  }
}
