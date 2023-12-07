import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseComponent } from './user-course.component';

describe('UserCourseComponent', () => {
  let component: UserCourseComponent;
  let fixture: ComponentFixture<UserCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCourseComponent]
    });
    fixture = TestBed.createComponent(UserCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
