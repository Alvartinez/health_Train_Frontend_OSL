import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitoComponent } from './hito.component';

describe('HitoComponent', () => {
  let component: HitoComponent;
  let fixture: ComponentFixture<HitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HitoComponent]
    });
    fixture = TestBed.createComponent(HitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
