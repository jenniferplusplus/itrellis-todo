# ItrellisTodo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Requirements

This project relies on Node and NPM. Those can be installed from the nodejs.org website if you don't already have them.
You will also need to install the angular cli, which can be done with this command.

```
npm i -g ng-cli
```

## Getting started

Install dependencies then start the development server.
```
npm i
ng serve
```

The app should now be [running](http://localhost:4200) at `http://localhost:4200`

## Further development

Off the top of my head, these are some things that could be improved. But, I think they are mostly beyond the scope of this exercise.

1. I should ideally add more tests. It got late and I got lazy, so I only have about half as many as I would like.
1. The app could handle overdue items better.
1. A real backend. The in-memory api leaves a lot to be desired, even given that it is just in-memory.
1. A manual refresh that doesn't reload the page.
1. Nicer styling. What's there is certainly functional, but also leaves a lot to be desired.
1. More obvious indications that a todo item has been completed.
1. Sorting and filtering of todo items.
1. Tasks are eating space bar events, and I don't know why. 😬
