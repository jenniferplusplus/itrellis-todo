import { Component, OnInit } from '@angular/core';

import { TodoListService} from './todo-list.service';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {}

  onClickAdd(): void {
    const createdDate = Date.now();
    const item = new TodoItem();

    this.todoListService.Add(item);
  }
}
