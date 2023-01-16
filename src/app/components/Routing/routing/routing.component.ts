import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
})
export class RoutingComponent {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  // public methods

  navigate() {
    this.route.navigate(['home']);
  }

  navigateByUrl() {
    this.route.navigateByUrl('home'); // always uses absolute path
  }

  navigateActivatedRoute() {
    this.route.navigate(['/home'], { relativeTo: this.activatedRoute });
  }

  // ngOnInit() {
  // this.activatedRoute.fragment.subscribe((val) => {
  //   console.log(val);
  //   this.jumpTo(val);
  // });
  //}

  // public jumpTo(section: any) {
  //   document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  // }
}
