import { TestBed } from '@angular/core/testing';

import { TodoItems.ApiService } from './todo-items.api.service';

describe('TodoItems.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoItems.ApiService = TestBed.get(TodoItems.ApiService);
    expect(service).toBeTruthy();
  });
});
