import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  newTask='';
  @Output() taskAdded = new EventEmitter<string>();

  addTask(): void{
    if(this.newTask.trim()){
      this.taskAdded.emit(this.newTask);
      
      this.newTask="";
    }

  }
}
