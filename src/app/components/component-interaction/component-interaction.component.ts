import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css'],
  providers: [UserService],
})
export class ComponentInteractionComponent {
  constructor(private userService: UserService) {}
  // public variables
}
