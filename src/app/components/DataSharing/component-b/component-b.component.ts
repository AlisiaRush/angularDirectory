import { Component, OnInit } from '@angular/core';
import { SubjectDataService } from 'src/app/subject-data.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
})
export class ComponentBComponent implements OnInit {
  constructor(private subjectDataService: SubjectDataService) {}
  // public variables
  public inputSubjectText!: string;

  // ngMethods
  ngOnInit() {
    this.subjectDataService.dataSubjectEmitter.subscribe((subjectValue) => {
      this.inputSubjectText = subjectValue;
    });
  }
}
