import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class WebService {

    readonly ROOT_URL;

    constructor(private http: HttpClient) { 
      this.ROOT_URL = 'http://localhost:8787';
    }
  
    getTodos() {
      return this.http.get(`${this.ROOT_URL}/`);
    }
    completeTodo(payload: Object) {
      return this.http.post(`${this.ROOT_URL}/complete`, payload);
    }
    newTodo(payload: Object) {
      return this.http.put(`${this.ROOT_URL}/new`, payload);
    }
    delete(id: string) {
      return this.http.delete(`${this.ROOT_URL}/${id}`);
    }
  }  