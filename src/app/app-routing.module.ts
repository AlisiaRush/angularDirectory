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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
