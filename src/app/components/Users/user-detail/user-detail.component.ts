import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(private userService: UserService) {}
  // Public Variables

  public usersToo!: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  };

  // NG Methods
  ngOnInit() {
    this.userService.onShowDetailsClicked.subscribe(
      (data: {
        name: string;
        job: string;
        gender: string;
        country: string;
        age: number;
        avatar: string;
      }) => {
        this.usersToo = data;
      }
    );
  }
}
