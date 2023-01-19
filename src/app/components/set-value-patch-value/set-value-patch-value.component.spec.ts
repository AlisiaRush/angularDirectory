import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetValuePatchValueComponent } from './set-value-patch-value.component';

describe('SetValuePatchValueComponent', () => {
  let component: SetValuePatchValueComponent;
  let fixture: ComponentFixture<SetValuePatchValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetValuePatchValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetValuePatchValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
