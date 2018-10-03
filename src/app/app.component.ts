import {Component, OnInit} from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { TodoListService } from './todo/todo-list.service';
import {TodoItem} from './todo/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'itrellis-todo';
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.todoListService.GetAll().subscribe(list => this.todoList = list);
  }

}
