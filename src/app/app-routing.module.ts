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
import { CourseGuardService } from './Services/course-guard.service';
import { CanDeactivateGuardService } from './Services/can-deactivate-guard.service';
import { CourseResolveService } from './Services/course-resolve.service';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { PurePipeComponent } from './components/pure-pipe/pure-pipe.component';
import { DataFilteringComponent } from './components/data-filtering/data-filtering.component';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { SetValuePatchValueComponent } from './components/set-value-patch-value/set-value-patch-value.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { CustomValidationComponent } from './components/custom-validation/custom-validation.component';
import { HttpRequestsComponent } from './components/http-requests/http-requests.component';

const routes: Routes = [
  // Main Pages

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'built-in-pipes', component: BuiltInPipesComponent },
  { path: 'componentInteraction', component: ComponentInteractionComponent },
  {
    path: 'contact',
    canDeactivate: [CanDeactivateGuardService],
    component: ContactComponent,
  },
  {
    path: 'courses',
    component: CourseComponent,
    resolve: { courses: CourseResolveService },
    canActivate: [CourseGuardService],
  },
  {
    path: 'courses',
    canActivateChild: [CourseGuardService],
    children: [
      { path: 'course-details/:id', component: CourseDetailsComponent },
    ],
  },
  { path: 'custom-pipes', component: CustomPipesComponent },
  { path: 'custom-validation', component: CustomValidationComponent },
  { path: 'data-sharing', component: ParentComponentComponent },
  { path: 'data-filtering', component: DataFilteringComponent },
  { path: 'dataServices', component: DataServiceComponent },
  { path: 'dependencyInjection', component: DependencyInjectionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hostBinding', component: HostBindingComponent },
  { path: 'hostListener', component: HostListenerComponent },
  { path: 'http-requests', component: HttpRequestsComponent },
  { path: 'ngClass', component: NgClassComponent },
  { path: 'ngFor', component: NgForComponent },
  { path: 'ngIf', component: NgIfComponent },
  { path: 'ngStyle', component: NgStyleComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'pure-pipes', component: PurePipeComponent },
  { path: 'renderer2', component: Renderer2Component },
  { path: 'reactiveForms', component: ReactiveFormsComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'setValuePatchValue', component: SetValuePatchValueComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent },

  // Check for non existing routes or pages that are not accessible
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
