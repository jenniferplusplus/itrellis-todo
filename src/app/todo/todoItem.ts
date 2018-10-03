import {Task} from './task';

export class TodoItem {
  id: number;
  description: string;
  moreDetails?: string;
  createdDate: number;
  dueDate: number;
  tasks: Task[];
  done: boolean;

  public constructor(init?: Partial<TodoItem>) {
    Object.assign(this, init);
  }
}
