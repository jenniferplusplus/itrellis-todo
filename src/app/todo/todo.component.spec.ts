import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import {MaterialModule} from '../material/material.module';
import {TodoItem} from './todoItem';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todoItem = new TodoItem({
      id: 2,
      createdDate: Date.parse('2018-10-01T12:00:00'),
      dueDate: Date.parse('2018-12-25'),
      description: 'Do Christmas Shopping',
      done: false,
      tasks: []
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
