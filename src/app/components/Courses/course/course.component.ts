import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  // Public Variables
  public searchText: string = '';

  public courseList: any;

  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    this.courseList = this.courseService.courses;
  }

  public onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
}
