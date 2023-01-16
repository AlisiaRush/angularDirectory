import { Component, OnInit } from '@angular/core';
import {
  NavigationStart,
  Event,
  Router,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { SubjectDataService } from './subject-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SubjectDataService],
})
export class AppComponent implements OnInit {
  constructor(
    private subjectDataService: SubjectDataService,
    private router: Router
  ) {}
  title = 'Angular Directory';
  logo = 'assets/images/logo.png';

  // Public Variables

  public displayLoadingIndicator: boolean = false;
  // public method

  // NG Methods
  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }
      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
      ) {
        this.displayLoadingIndicator = false;
      }
    });
  }
}
