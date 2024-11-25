import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TodoItem } from './ITodoItem';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [NgFor, NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {

  @Input() todoList: TodoItem[] = [];
  @Output () toggleCompleted: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();
}
