import {TodoItem} from './todoItem';

export const TODOITEMS: TodoItem[] = [
  {
    id: 1,
    createdDate: Date.parse('2018-10-01T12:00:00'),
    dueDate: Date.parse('2018-10-03'),
    description: 'Build an Angular 6 "ToDo List" demo project',
    moreDetails: 'This project should take about a day to complete',
    done: true,
    tasks: [
      { description: 'View, create, remove, complete ToDo items', done: true },
      { description: 'Style things so they look pleasant', done: true }
    ]
  },
  {
    id: 2,
    createdDate: Date.parse('2018-10-01T12:00:00'),
    dueDate: Date.parse('2018-12-25'),
    description: 'Do Christmas Shopping',
    done: false,
    tasks: []
  },
  {
    id: 3,
    createdDate: Date.parse('2018-10-01T12:00:00'),
    dueDate: Date.parse('2999-12-31'),
    description: 'Prep for new millenium',
    done: false,
    tasks: []
  }
];
