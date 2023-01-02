import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-service-component-b',
  templateUrl: './service-component-b.component.html',
  styleUrls: ['./service-component-b.component.css'],
})
export class ServiceComponentBComponent {
  // Public Variables
  public title = 'Angular Course';

  //public Methods
  public onEnroll() {
    const enrollService = new EnrollService();
    enrollService.OnEnrollClicked(this.title);
  }
}
