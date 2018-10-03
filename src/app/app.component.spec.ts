import { TestBed, async } from '@angular/core/testing';
import { AppModule} from './app.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { MaterialModule } from './material/material.module';
import {AddTodoComponent} from './todo/add-todo.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoComponent,
        AddTodoComponent
      ],
      imports: [
        MaterialModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'itrellis-todo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('itrellis-todo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to itrellis-todo!');
  });
});
