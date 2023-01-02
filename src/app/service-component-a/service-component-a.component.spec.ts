import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComponentAComponent } from './service-component-a.component';

describe('ServiceComponentAComponent', () => {
  let component: ServiceComponentAComponent;
  let fixture: ComponentFixture<ServiceComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceComponentAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
