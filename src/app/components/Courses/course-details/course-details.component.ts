import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  // public variables

  public course: any;
  public courseId: any;
  public routeParamObs: any;
  public editMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router
  ) {}

  ngOnInit() {
    // snapshot does not get updated here if parameter value is updated. We need to use an observable
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id'); // New Approach
    // this.courseId = this.activatedRoute.snapshot.params['id']; // Old Approach
    // this.course = this.courseService.courses.find((x) => x.id == this.courseId);

    // Here we will subscribe using an observable. Everytime it receives a value, the parameter will be updated here:
    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.courseService.courses.find(
        (x) => x.id == this.courseId
      );
    });
  }

  public appendQueryParam() {
    this.router.navigate(['/courses/course-details', this.courseId], {
      queryParams: { edit: true },
    });

    // this.editMode = Boolean(
    //   this.activatedRoute.snapshot.queryParamMap.get('edit')
    // );

    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    });
  }
  // It is always a good idea to unsubscribe. We have created a variable called routeParamObs and assined the following to it:
  /* this.activatedRoute.paraMap.subscribe((param) => {
    this.courseId = param.get('id');
  })
  */

  // Explicity unsubscribing from Observable
  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }
}
