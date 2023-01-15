import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit {
  // Public Variables

  /** CREATING AN OBSERVABLE USING CONSTRUCTOR METHOD */

  // public myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.error(new Error('Something went wrong.'));
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 3000);
  //   // These will not get emitted because there is an error. We need to handle the error
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  // });

  /** CREATING AN OBSERVABLE USING CREATE METHOD */
  public myObservable2 = Observable.create((observer: any) => {
    setTimeout(() => {
      observer.next('a');
    }, 1000);
    setTimeout(() => {
      observer.next('b');
    }, 2000);
    setTimeout(() => {
      observer.next('c');
    }, 3000);
    setTimeout(() => {
      observer.next('d');
    }, 4000);
    // setTimeout(() => {
    //   observer.error(new Error('Something went wrong here!'));
    // }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 7000);
  });

  // ngOnInit() {
  //   this.myObservable.subscribe(
  //     (val) => {
  //       console.log(val);
  //     },
  //     (error) => {
  //       alert(error.message);
  //     },
  //     () => {
  //       alert('Observable has completed emitting all values');
  //     }
  //   );
  // }

  public array1 = [1, 2, 6, 7, 8];
  public array2 = ['A', 'B', 'C'];

  /** CREATING AN OBSERVABLE USING OPERATOR METHOD */
  // Emits a complete signal after data is complete using "of" operator
  /**NOTE: "of" emits whole value */
  public myObservable3 = of(this.array1, this.array2, 'Hello');

  // Emits a complete signal after data is complete using "from" operator
  /**NOTE: "from" emits value one by one (iterable)*/
  /* Convert a Promise to an Observable using "from". */
  public myObservable4 = from(this.array1);

  // ngOnInit() {
  //   this.myObservable2.subscribe(
  //     (val: any) => {
  //       console.log(val);
  //     },
  //     (error: any) => {
  //       alert(error.message);
  //     },
  //     () => {
  //       alert('Observable has completed emitting all values');
  //     }
  //   );
  // }

  // ngOnInit() {
  //   this.myObservable3.subscribe(
  //     (val: any) => {
  //       console.log(val);
  //     },
  //     (error: any) => {
  //       alert(error.message);
  //     },
  //     () => {
  //       alert('Observable has completed emitting all values');
  //     }
  //   );
  // }
  ngOnInit() {
    this.myObservable4.subscribe(
      (val: any) => {
        console.log(val);
      },
      (error: any) => {
        alert(error.message);
      },
      () => {
        alert('Observable has completed emitting all values');
      }
    );
  }
}
