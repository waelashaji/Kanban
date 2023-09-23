import { Component, ElementRef, OnInit, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onNewIssue = new EventEmitter();
  @ViewChild('popup') popup!: ElementRef;
  @ViewChild('profile') profile!: ElementRef;
  


  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }

  add() {
    this.onNewIssue.emit();
  }

  open() {
    this.popup.nativeElement.classList.add('show')
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
      
    if (!this.popup.nativeElement.contains(event.target) && !this.profile.nativeElement.contains(event.target) ) {
        this.popup.nativeElement.classList.remove('show');
      }
  }

  search(event: any) {
    this.userService.searchEvent.emit(event.target.value);
  }
}

