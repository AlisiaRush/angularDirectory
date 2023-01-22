import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ParentComponentComponent } from './components/DataSharing/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/DataSharing/child-component/child-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsComponent } from './components/terms/terms.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentAComponent } from './components/DataSharing/component-a/component-a.component';
import { ComponentBComponent } from './components/DataSharing/component-b/component-b.component';
import { SearchComponent } from './components/search/search.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { Renderer2Component } from './components/renderer2/renderer2.component';
import { RenderHighlightDirective } from './CustomDirectives/renderHighlight.directive';
import { HostListenerComponent } from './components/host-listener/host-listener.component';
import { HostListenerHoverDirective } from './CustomDirectives/hostListener-hover.directive';
import { HostBindingComponent } from './components/host-binding/host-binding.component';
import { HostBindingHighlightDirective } from './CustomDirectives/host-binding-highlight.directive';
import { ServiceComponentAComponent } from './service-component-a/service-component-a.component';
import { ServiceComponentBComponent } from './service-component-b/service-component-b.component';
import { ServicesComponent } from './components/services/services.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { DataServiceComponent } from './components/data-service/data-service.component';
import { AddUserComponent } from './components/Users/add-user/add-user.component';
import { UserService } from './Services/user.service';
import { LoggerMessageComponent } from './sharedComponents/logger-message/logger-message.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { AllUsersComponent } from './components/Users/all-users/all-users.component';
import { UserDetailComponent } from './components/Users/user-detail/user-detail.component';
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
import { AuthService } from './Services/auth.service';
import { CanDeactivateGuardService } from './Services/can-deactivate-guard.service';
import { CourseResolveService } from './Services/course-resolve.service';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { PercentagePipe } from './CustomPipes/percentage.pipe';
import { FilterPipe } from './CustomPipes/filter.pipe';
import { PurePipeComponent } from './components/pure-pipe/pure-pipe.component';
import { DataFilteringComponent } from './components/data-filtering/data-filtering.component';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { SetValuePatchValueComponent } from './components/set-value-patch-value/set-value-patch-value.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { CustomValidationComponent } from './components/custom-validation/custom-validation.component';
import { HttpRequestsComponent } from './components/http-requests/http-requests.component';
import { CourseFeaturedComponent } from './components/Courses/course-featured/course-featured.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AllUsersComponent,
    AddUserComponent,
    BuiltInPipesComponent,
    ChildComponentComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentInteractionComponent,
    ContactComponent,
    CourseComponent,
    CourseDetailsComponent,
    CustomPipesComponent,
    DataFilteringComponent,
    DataServiceComponent,
    DependencyInjectionComponent,
    HomeComponent,
    HostBindingComponent,
    HostBindingHighlightDirective,
    HostListenerComponent,
    HostListenerHoverDirective,
    LoggerMessageComponent,
    NavComponent,
    NgClassComponent,
    NgForComponent,
    NgIfComponent,
    NgStyleComponent,
    ObservablesComponent,
    OperatorsComponent,
    PageNotFoundComponent,
    ParentComponentComponent,
    PurePipeComponent,
    Renderer2Component,
    RenderHighlightDirective,
    RoutingComponent,
    ServiceComponentAComponent,
    ServiceComponentBComponent,
    ServicesComponent,
    SearchComponent,
    TemplateDrivenFormsComponent,
    TermsComponent,
    UserDetailComponent,
    UnsubscribeComponent,
    // PIPES
    FilterPipe,
    PercentagePipe,
    SetValuePatchValueComponent,
    ReactiveFormsComponent,
    CustomValidationComponent,
    HttpRequestsComponent,
    CourseFeaturedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [
    UserService,
    CourseGuardService,
    AuthService,
    CanDeactivateGuardService,
    CourseResolveService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
