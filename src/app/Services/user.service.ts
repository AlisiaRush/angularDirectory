import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private loggerService: LoggerService) {}
  // Public Variables

  public users = [
    { name: 'John', status: 'active' },
    { name: 'Steve', status: 'inactive' },
    { name: 'Mark', status: 'active' },
  ];

  public usersToo = [
    {
      name: 'John',
      job: 'Teacher',
      gender: 'Male',
      country: 'United States',
      age: 35,
      avatar: 'assets/images/avatar/john.jpeg',
    },
    {
      name: 'Mark',
      job: 'Designer',
      gender: 'Male',
      country: 'Germany',
      age: 35,
      avatar: 'assets/images/avatar/mark.jpeg',
    },
    {
      name: 'Merry',
      job: 'Lawyer',
      gender: 'Female',
      country: 'Ireland',
      age: 35,
      avatar: 'assets/images/avatar/merry.jpeg',
    },
    {
      name: 'Steve',
      job: 'Doctor',
      gender: 'Male',
      country: 'India',
      age: 35,
      avatar: 'assets/images/avatar/steve.jpeg',
    },
  ];

  // public methods

  public addNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.loggerService.LogMessage(name, status);
  }

  public onShowDetailsClicked = new EventEmitter<{
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }>();

  public showUserDetails(userToo: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }) {
    this.onShowDetailsClicked.emit(userToo);
  }
}
