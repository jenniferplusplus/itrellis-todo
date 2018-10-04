import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import {MaterialModule} from '../material/material.module';
import {TodoItem} from './todoItem';
import {TODOITEMS} from './todo-mock';
import {HttpClientModule} from '@angular/common/http';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [ MaterialModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todoItem = TODOITEMS[1]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
