import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from 'src/app/Services/can-deactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, IDeactivateComponent {
  // Public Variables
  public firstName: any;
  public lastName: any;
  public country: any;
  public subject: any;

  // Public Methods
  canExit() {
    if (this.firstName || this.lastName || this.country || this.subject) {
      return confirm(
        'You have unsaved changes. Do you want to discard these changes'
      );
    } else {
      return true;
    }
  }

  public ProcessForm() {}

  // NG Methods

  ngOnInit() {}
}
