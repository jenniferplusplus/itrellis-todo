export class Task {
  description: string;
  done: boolean;

  public constructor(init?: Partial<Task>) {
    Object.assign(this, init);

    this.description = this.description || '';
    this.done = this.done || false;
  }
}
