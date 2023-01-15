import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentComponentComponent } from './components/DataSharing/parent-component/parent-component.component';
import { TermsComponent } from './components/terms/terms.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { Renderer2Component } from './components/renderer2/renderer2.component';
import { HostListenerComponent } from './components/host-listener/host-listener.component';
import { HostBindingComponent } from './components/host-binding/host-binding.component';
import { ServicesComponent } from './components/services/services.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { DataServiceComponent } from './components/data-service/data-service.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ObservablesComponent } from './components/Observable/observables/observables.component';
import { OperatorsComponent } from './components/Observable/operators/operators.component';
import { UnsubscribeComponent } from './components/Observable/unsubscribe/unsubscribe.component';
import { RoutingComponent } from './components/Routing/routing/routing.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/Courses/course/course.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseDetailsComponent } from './components/Courses/course-details/course-details.component';

const routes: Routes = [
  // Main Pages

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CourseComponent },
  // { path: 'course-details/:id', component: CourseDetailsComponent },
  {
    path: 'courses',
    children: [
      { path: 'course-details/:id', component: CourseDetailsComponent },
    ],
  },
  // Sub Pages
  { path: 'data-sharing', component: ParentComponentComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'ngClass', component: NgClassComponent },
  { path: 'ngFor', component: NgForComponent },
  { path: 'ngStyle', component: NgStyleComponent },
  { path: 'ngIf', component: NgIfComponent },
  { path: 'renderer2', component: Renderer2Component },
  { path: 'hostListener', component: HostListenerComponent },
  { path: 'hostBinding', component: HostBindingComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'dependencyInjection', component: DependencyInjectionComponent },
  { path: 'dataServices', component: DataServiceComponent },
  { path: 'componentInteraction', component: ComponentInteractionComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent },
  { path: 'routing', component: RoutingComponent },
  // Check for non existing routes or pages that are not accessible
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
