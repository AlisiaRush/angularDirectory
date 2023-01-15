import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css'],
})
export class UnsubscribeComponent implements OnInit {
  // public variables
  public array1 = [1, 2, 6, 7, 8];
  public array2 = ['A', 'B', 'C'];

  // public methods

  counterObs = interval(1000);
  counterSub: any;

  // NG Methods
  ngOnInit(): void {
    this.counterSub = this.counterObs.subscribe((val) => {
      console.log(val);
    });
  }

  public unsubscribe() {
    this.counterSub.unsubscribe();
  }

  public subscribe() {
    this.counterSub = this.counterObs.subscribe((val) => {
      console.log(val);
    });
  }
}
