import { Component } from '@angular/core';
import { LoggerService } from 'src/app/Services/logger.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [UserService], // if provider here is used it will override the instance in app component and you will not see a new user added in the UI
})
export class AddUserComponent {
  constructor(
    private userService: UserService,
    private loggerService: LoggerService
  ) {}
  // Public Variables

  public username: string = '';
  public status: string = 'active';
  public message: string = '';

  // Public methods

  public addNewUser() {
    this.userService.addNewUser(this.username, this.status);
    this.message =
      'A new user with username ' +
      this.username +
      ' with status ' +
      this.status +
      ' has been added.';
  }
}
