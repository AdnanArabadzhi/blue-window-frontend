import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces';
import { WebService } from 'src/app/webservice';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

    public todos: Array<Todo> = []
    public name: string = ''

  constructor(private service: WebService) { }

  ngOnInit() {    
    this.service.getTodos().subscribe((response: any) => {
      this.todos = response.todos;
      console.log(this.todos);
    })
  }

  public addNewTodo() {
    this.service.newTodo({name: this.name}).subscribe((response: any) => {
      console.log(response);
      this.todos.push(response.todo)
      this.name ='';
    })
  }
  public delete(index: any){
    console.log(index);
    this.service.delete(this.todos[index].id).subscribe(
      (response) => {
        this.todos.splice(index, 1)
    },
    (error) => {
        console.error('Error updating todo:', error);
    }
    )
  }

}
