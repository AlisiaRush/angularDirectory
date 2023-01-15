import { Component } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.css'],
})
export class Renderer2Component {
  // public variables

  public showCode: boolean = false;

  public getCode() {
    this.showCode = true;
  }

  public closeCode() {
    this.showCode = false;
  }
}
