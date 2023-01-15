import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css'],
  providers: [UserService],
})
export class DataServiceComponent implements OnInit {
  constructor(private userService: UserService) {}
  // Public Variables

  public showCode: boolean = false;

  public users: { name: string; status: string }[] = [];

  ngOnInit() {
    this.users = this.userService.users;
  }

  public getCode() {
    this.showCode = true;
  }

  public closeCode() {
    this.showCode = false;
  }
}
