import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import {TodoListService} from './todo-list.service';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  let mockTodoService: TodoListService;

  beforeAll((() => {
    const todoService = TestBed.get(TodoListService);
    mockTodoService = jasmine.createSpyObj('TodoListService', ['GetAll', 'Get', 'Add', 'Edit'])
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoComponent ],
      providers: [ {provide: TodoListService, useValue: mockTodoService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the TodoListService', () => {
    component.onClickAdd();
    return expect(mockTodoService.Add).toHaveBeenCalled();
  });
});
