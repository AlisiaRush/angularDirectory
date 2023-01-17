import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css'],
})
export class BuiltInPipesComponent implements OnInit {
  constructor(private userService: UserService) {}

  // Public Variable

  public usersToo: any;

  ngOnInit() {
    this.usersToo = this.userService.usersToo;
  }
}
