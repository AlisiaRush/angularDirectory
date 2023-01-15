import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerMessageComponent } from './logger-message.component';

describe('LoggerMessageComponent', () => {
  let component: LoggerMessageComponent;
  let fixture: ComponentFixture<LoggerMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
