import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent {
  // public variables
  public showCode: boolean = false;
  public value: boolean = true;

  // public methods

  public getCode() {
    this.showCode = true;
  }

  public closeCode() {
    this.showCode = false;
  }
}
