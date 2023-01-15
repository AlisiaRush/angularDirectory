import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit {
  // public variables

  public array1 = [1, 2, 6, 7, 8]; // return 1,2,6,7,8 => 5,10,35,40

  public myObservable = from(this.array1); // multiply each value by 5. Then return a new variable

  // Using Map Operator. Then Filter Operator. Will be applied in the order that is specified.
  // transformedObs = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val) => {
  //     return val >= 30;
  //   })
  // );

  // You can also chain the map and filter operators to "myObservable like so"...

  public myObservableChain = from(this.array1).pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val) => {
      return val >= 30;
    })
  );

  // Using Filter Operator
  // filteredObs = this.transformedObs.pipe(
  //   filter((val) => {
  //     return val >= 30;
  //   })
  // );
  // NG Methods

  // ngOnInit() {
  //   this.transformedObs.subscribe(
  //     (val) => {
  //       console.log(val);
  //     },
  //     (error) => {
  //       alert(error.message);
  //     },
  //     () => {
  //       alert('Observable has completed emitting all values.');
  //     }
  //   );
  // }

  ngOnInit() {
    this.myObservableChain.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        alert('Observable has completed emitting all values.');
      }
    );
  }

  // ngOnInit() {
  //   this.filteredObs.subscribe(
  //     (val) => {
  //       console.log(val);
  //     },
  //     (error) => {
  //       alert(error.message);
  //     },
  //     () => {
  //       alert('Observable has completed emitting all values.');
  //     }
  //   );
  // }
}
