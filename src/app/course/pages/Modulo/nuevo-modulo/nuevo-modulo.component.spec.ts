import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoModuloComponent } from './nuevo-modulo.component';

describe('NuevoModuloComponent', () => {
  let component: NuevoModuloComponent;
  let fixture: ComponentFixture<NuevoModuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoModuloComponent]
    });
    fixture = TestBed.createComponent(NuevoModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
