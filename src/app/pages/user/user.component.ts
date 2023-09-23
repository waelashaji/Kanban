import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Issue } from 'src/app/interfaces/issue';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  toDo!: Issue[] 
  doing!: Issue[]
  done!: Issue[] 

  loading = true;

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.toDo = this.userService.toDo;
    this.doing = this.userService.doing;
    this.done = this.userService.done;
    this.loading = false;
  }

  drop(event: CdkDragDrop<Issue[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      let issue = event.container.data[event.currentIndex];
      let status = (<string>event.container.element.nativeElement.getAttribute('id'));
      issue.status = status; 
    }
  }

  addIssue() {
    let issue = new Issue;
    this.toDo.unshift(issue);
  }
}
