import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CourseResolveService implements Resolve<any> {
  constructor(private courseService: CoursesService) {}
  // Public Methods

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.courseService.getAllCourses().then((data: any) => {
      return data;
    });
  }
}
