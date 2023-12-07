import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhoComponent } from './section-who.component';

describe('SectionWhoComponent', () => {
  let component: SectionWhoComponent;
  let fixture: ComponentFixture<SectionWhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionWhoComponent]
    });
    fixture = TestBed.createComponent(SectionWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
