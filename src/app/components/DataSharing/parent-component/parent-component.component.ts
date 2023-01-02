import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectDataService } from 'src/app/subject-data.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  providers: [SubjectDataService],
})
export class ParentComponentComponent {
  constructor(private subjectDataService: SubjectDataService) {}

  // Public Variables

  public value: any = 'Child Value';
  public parentUsername: string = 'John Smith';
  public showMessage!: boolean;
  public show: boolean = false;
  public enteredSubjectText!: string;

  // Public Methods
  public getChildValue(inputValue: HTMLInputElement) {
    this.value = inputValue.value;

    if (this.value !== 'Child Value') {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }

  public showCode() {
    this.show = true;
  }

  public closeCode() {
    this.show = false;
  }
}
