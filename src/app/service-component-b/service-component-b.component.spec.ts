import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComponentBComponent } from './service-component-b.component';

describe('ServiceComponentBComponent', () => {
  let component: ServiceComponentBComponent;
  let fixture: ComponentFixture<ServiceComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceComponentBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
