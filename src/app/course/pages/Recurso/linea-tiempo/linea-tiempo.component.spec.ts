import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaTiempoComponent } from './linea-tiempo.component';

describe('LineaTiempoComponent', () => {
  let component: LineaTiempoComponent;
  let fixture: ComponentFixture<LineaTiempoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineaTiempoComponent]
    });
    fixture = TestBed.createComponent(LineaTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
