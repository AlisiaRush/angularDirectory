import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent {
  // public variables

  public showCode: boolean = false;
  public value: string = '';

  public getCode() {
    this.showCode = true;
  }

  public closeCode() {
    this.showCode = false;
  }
}
