import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeModuleComponent } from './welcome-module.component';

describe('WelcomeModuleComponent', () => {
  let component: WelcomeModuleComponent;
  let fixture: ComponentFixture<WelcomeModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeModuleComponent]
    });
    fixture = TestBed.createComponent(WelcomeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
