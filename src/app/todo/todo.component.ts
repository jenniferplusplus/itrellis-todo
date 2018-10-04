import {Component, Input, OnInit} from '@angular/core';

import {TodoItem} from './todoItem';
import {TodoListService} from './todo-list.service';
import {Task} from './task';
import {OverdueMatcher} from '../validators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  @Input()
  todoItem: TodoItem;
  errorMatcher = new OverdueMatcher;

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit(): void {
    this.todoItem.done = this.isDone();
  }

  isDone(): boolean {
    let done: boolean;
    if (this.todoItem.tasks.length > 0) {
      done = this.todoItem.tasks.reduce((val, item) => {
        return val && item.done;
      }, true);

      return done;
    }

    return this.todoItem.done;
  }

  onTaskClick(task: Task): void {
    task.done = !task.done;
  }

  onComplete(): void {
    const value: boolean = !this.isDone();
    this.todoItem.tasks.forEach((task) => task.done = value);
    this.todoItem.done = value;

    this.todoListService.Edit(this.todoItem);
  }
}
