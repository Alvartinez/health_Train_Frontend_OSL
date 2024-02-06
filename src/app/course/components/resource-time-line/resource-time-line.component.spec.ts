import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTimeLineComponent } from './resource-time-line.component';

describe('ResourceTimeLineComponent', () => {
  let component: ResourceTimeLineComponent;
  let fixture: ComponentFixture<ResourceTimeLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceTimeLineComponent]
    });
    fixture = TestBed.createComponent(ResourceTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
