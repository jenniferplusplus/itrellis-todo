import { Component, Input, OnInit } from '@angular/core';

import {TodoItem} from './todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todoItem: TodoItem;
  dueDate: Date;
  createdDate: Date;

  constructor() {}

  ngOnInit(): void {
    this.dueDate = new Date(this.todoItem.dueDate);
    this.createdDate = new Date(this.todoItem.createdDate);
  }
}
