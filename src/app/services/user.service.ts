import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  toDo = [
    {
      title: "Validate requests using JOI",
      category: "Backend",
      dueDate: new Date().toDateString(),
      estimate: "4d",
      importance:  "Medium",
      status: "todo",
    }
  ]

  doing = [];

  done = [
    {
      title: "API Documentation Using Swagger",
      category: "Documentation",
      dueDate: new Date().toDateString(),
      estimate: "3w",
      importance:  "High",
      status: "done",
    }
  ]

  constructor(
  ) { } 

}
