import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ParentComponentComponent } from './components/DataSharing/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/DataSharing/child-component/child-component.component';
import { FormsModule } from '@angular/forms';
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
import { RenderHighlightDirective } from './customDirectives/renderHighlight.directive';
import { HostListenerComponent } from './components/host-listener/host-listener.component';
import { HostListenerHoverDirective } from './customDirectives/hostListener-hover.directive';
import { HostBindingComponent } from './components/host-binding/host-binding.component';
import { HostBindingHighlightDirective } from './customDirectives/host-binding-highlight.directive';
import { ServiceComponentAComponent } from './service-component-a/service-component-a.component';
import { ServiceComponentBComponent } from './service-component-b/service-component-b.component';
import { ServicesComponent } from './components/services/services.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { DataServiceComponent } from './components/data-service/data-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    TermsComponent,
    HomeComponent,
    ComponentAComponent,
    ComponentBComponent,
    SearchComponent,
    NgClassComponent,
    NgForComponent,
    NgStyleComponent,
    NgIfComponent,
    Renderer2Component,
    RenderHighlightDirective,
    HostListenerComponent,
    HostListenerHoverDirective,
    HostBindingComponent,
    HostBindingHighlightDirective,
    ServiceComponentAComponent,
    ServiceComponentBComponent,
    ServicesComponent,
    DependencyInjectionComponent,
    DataServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
