import {Task} from './task';

export class TodoItem {
  id: number;
  description: string;
  moreDetails?: string;
  createdDate: Date;
  dueDate: Date;
  tasks: Task[];
  done: boolean;

  public constructor(init?: Partial<TodoItem>) {
    Object.assign(this, init);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.id = this.id || -1 * today.valueOf();
    this.createdDate = this.createdDate || today;
    this.dueDate = this.dueDate || tomorrow;
  }
}
