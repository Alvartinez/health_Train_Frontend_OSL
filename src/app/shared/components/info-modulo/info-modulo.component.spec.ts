import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModuloComponent } from './info-modulo.component';

describe('InfoModuloComponent', () => {
  let component: InfoModuloComponent;
  let fixture: ComponentFixture<InfoModuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoModuloComponent]
    });
    fixture = TestBed.createComponent(InfoModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
