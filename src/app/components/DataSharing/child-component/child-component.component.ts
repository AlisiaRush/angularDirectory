import { Component, Input, OnInit } from '@angular/core';
import { SubjectDataService } from 'src/app/subject-data.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  constructor(private subjectDataService: SubjectDataService) {}
  // Public Variables
  @Input() childValue: string = 'Child Value';
  @Input() username: string = '';

  @Input() showMessage: boolean = false;
  @Input() showChild: boolean = true;
  @Input() showSubject: boolean = true;
  public inputSubjectText: string = '';
  public showCode: boolean = false;

  // Public Methods
  public closeMessage() {
    this.showMessage = false;
  }

  public closeCode() {
    this.showCode = false;
  }

  public showComponentSharingCode() {
    this.showCode = true;
  }

  // Ng Methods

  ngOnInit() {}
}
