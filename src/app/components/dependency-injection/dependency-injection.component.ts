import { Component } from '@angular/core';
import { EnrollService } from 'src/app/Services/enroll.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],
  providers: [EnrollService],
})
export class DependencyInjectionComponent {
  constructor(private enrollService: EnrollService) {}

  // Public Variables
  public title = 'Dependency Injection';

  // Public Methods
  public onEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}
