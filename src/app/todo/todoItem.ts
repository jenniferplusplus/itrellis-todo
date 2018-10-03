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
    const today = Date.now();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.id = this.id || -1 * today;
    this.createdDate = this.createdDate || today;
    this.dueDate = this.dueDate || tomorrow.valueOf();
  }
}
