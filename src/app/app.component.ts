import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from './todo-list/ITodoItem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  todoList: TodoItem[] = [];

  ngOnInit(): void {
      this.loadTasks()
  }

  addTask(task: string): void {
    const newTodoItem: TodoItem = {
      id: Date.now(),
      task: task,
      completed: false,
    };
    this.todoList.push(newTodoItem);    
    this.saveList();
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
    this.saveList()
  }
  
  toggleCompleted(id: number): void {
    const todoItem = this.todoList.find((item) => item.id === id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
    }
    console.log(this.todoList);
    
    this.saveList()
  }

  private saveList(): void {
    sessionStorage.setItem("todoList", JSON.stringify(this.todoList));
  } 

  private loadTasks(): void {
    const storedTasks = sessionStorage.getItem("todoList");
    if(storedTasks){
      this.todoList = JSON.parse(storedTasks);
    };
  }
}
