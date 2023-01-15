import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private authService: AuthService) {}
  // Public Variables

  // Public Methods

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }
}
