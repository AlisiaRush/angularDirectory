import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  // Public Variables
  public usersToo: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }[] = [];

  // Public Methods
  public showDetails(usersToo: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }) {
    this.userService.showUserDetails(usersToo);
  }

  // NG Methods

  ngOnInit(): void {
    this.usersToo = this.userService.usersToo;
  }
}
