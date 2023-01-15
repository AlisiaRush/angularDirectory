import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  // Public Variables
  @Input() message: string = '';

  // Public Methods

  public LogMessage(name: string, status: string) {
    this.message =
      'A new user with username ' +
      name +
      ' with status ' +
      status +
      ' has been added.';
  }

  constructor() {}
}
