import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiaQueComponent } from './sabia-que.component';

describe('SabiaQueComponent', () => {
  let component: SabiaQueComponent;
  let fixture: ComponentFixture<SabiaQueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SabiaQueComponent]
    });
    fixture = TestBed.createComponent(SabiaQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
