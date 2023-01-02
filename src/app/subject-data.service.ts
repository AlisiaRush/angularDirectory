import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectDataService {
  // Using Subject
  public dataSubjectEmitter = new Subject<string>();

  public raisedSubjectEmitterEvent(data: string) {
    this.dataSubjectEmitter.next(data);
  }

  constructor() {}
}
