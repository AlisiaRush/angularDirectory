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
      percentage: '93',
      age: 70,
      dob: '9/17/63',
      avatar: 'assets/images/avatar/john.jpeg',
    },
    {
      name: 'Mark',
      job: 'Designer',
      gender: 'Male',
      country: 'Germany',
      percentage: '90',
      age: 35,
      dob: '7/12/84',
      avatar: 'assets/images/avatar/mark.jpeg',
    },
    {
      name: 'Abasi',
      job: 'Lawyer',
      gender: 'Female',
      country: 'South Africa',
      percentage: '27',
      age: 20,
      dob: '10/11/95',
      avatar: 'assets/images/avatar/merry.jpeg',
    },
    {
      name: 'Steve',
      job: 'Doctor',
      gender: 'Male',
      country: 'India',
      percentage: '89',
      age: 43,
      dob: '8/11/79',
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
