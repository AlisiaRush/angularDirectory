import { Component } from '@angular/core';
import { SubjectDataService } from './subject-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SubjectDataService],
})
export class AppComponent {
  constructor(private subjectDataService: SubjectDataService) {}
  title = 'Angular Directory';
  logo = 'assets/images/logo.png';
}
