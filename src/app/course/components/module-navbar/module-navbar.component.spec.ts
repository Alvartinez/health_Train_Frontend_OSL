import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNavbarComponent } from './module-navbar.component';

describe('UserNavbarComponent', () => {
  let component: ModuleNavbarComponent;
  let fixture: ComponentFixture<ModuleNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleNavbarComponent]
    });
    fixture = TestBed.createComponent(ModuleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
