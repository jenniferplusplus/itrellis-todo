import {TodoItem} from './todoItem';

export const TODOITEMS: TodoItem[] = [
  new TodoItem({
    id: 1,
    createdDate: Date.parse('2018-10-01T12:00:00'),
    dueDate: Date.parse('2018-10-03'),
    description: 'Angular 6 "ToDo List" demo project',
    moreDetails: 'This project should take about a day to complete',
    done: true,
    tasks: [
      { description: 'View, create, edit, delete, and complete ToDo items', done: true },
      { description: 'View, create, edit, delete, and complete tasks', done: false },
      { description: 'Style things so they look pleasant', done: false }
    ]
  }),
  new TodoItem({
    id: 2,
    createdDate: Date.parse('2018-10-01T12:00:00'),
    dueDate: Date.parse('2018-12-25'),
    description: 'Do Christmas Shopping',
    done: false,
    tasks: []
  }),
  new TodoItem({
    id: 3,
    createdDate: Date.parse('2018-10-01T12:00:00'),
    dueDate: Date.parse('2999-12-31'),
    description: 'Prep for new millenium',
    done: false,
    tasks: []
  })
];
