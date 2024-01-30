import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModuloDocComponent } from './info-modulo.component';

describe('InfoModuloComponent', () => {
  let component: InfoModuloDocComponent;
  let fixture: ComponentFixture<InfoModuloDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoModuloDocComponent]
    });
    fixture = TestBed.createComponent(InfoModuloDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
