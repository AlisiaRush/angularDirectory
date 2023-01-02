import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnrollService {
  // Public Variables

  // Public Methods

  public OnEnrollClicked(title: string) {
    alert('Thank you for enrolling in ' + title);
  }

  constructor() {}
}
