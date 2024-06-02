import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from 'src/app/interfaces';
import { WebService } from 'src/app/webservice';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todo!: Todo;
  @Input() index!: number;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private fb: FormBuilder, private service: WebService) {

  }

  complete(){
    console.log(this.todo);
    this.service.completeTodo({id: this.todo.id}).subscribe(
      (response) => {
        console.log('Todo updated successfully');
        this.todo.completed = true
      },
      (error) => {
          console.error('Error updating todo:', error);
      }
    )
  }

  delete(){
    this.deleteEvent.emit(this.index);
  }
}
