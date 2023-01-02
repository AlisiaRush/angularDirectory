import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-service-component-a',
  templateUrl: './service-component-a.component.html',
  styleUrls: ['./service-component-a.component.css'],
})
export class ServiceComponentAComponent {
  // Public Variables
  public title = 'JavaScript Course';

  //public Methods
  public onEnroll() {
    const enrollService = new EnrollService();
    enrollService.OnEnrollClicked(this.title);
  }
}
