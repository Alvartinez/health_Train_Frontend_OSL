import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitHomeComponent } from './visit-home.component';

describe('VisitHomeComponent', () => {
  let component: VisitHomeComponent;
  let fixture: ComponentFixture<VisitHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitHomeComponent]
    });
    fixture = TestBed.createComponent(VisitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
