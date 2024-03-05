import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBodyComponent } from './course-body.component';

describe('CourseBodyComponent', () => {
  let component: CourseBodyComponent;
  let fixture: ComponentFixture<CourseBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseBodyComponent]
    });
    fixture = TestBed.createComponent(CourseBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
