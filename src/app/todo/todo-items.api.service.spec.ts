import { TestBed } from '@angular/core/testing';

import { TodoItemsApiService } from './todo-items.api.service';
import {HttpClientModule} from '@angular/common/http';

describe('TodoItems.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: TodoItemsApiService = TestBed.get(TodoItemsApiService);
    expect(service).toBeTruthy();
  });
});
