import { Component } from '@angular/core';
import { SubjectDataService } from 'src/app/subject-data.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent {
  constructor(private subjectDataService: SubjectDataService) {}

  // public variables
  public enteredSubjectText!: string;
  public showCode: boolean = false;

  // public methods
  public onButtonClickSubject() {
    this.subjectDataService.raisedSubjectEmitterEvent(this.enteredSubjectText);
  }

  public closeCode() {
    this.showCode = false;
  }

  public getCode() {
    this.showCode = true;
  }
}
