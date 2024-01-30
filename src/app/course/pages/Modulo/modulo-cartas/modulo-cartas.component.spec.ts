import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCartasComponent } from './modulo-cartas.component';

describe('ModuloCartasComponent', () => {
  let component: ModuloCartasComponent;
  let fixture: ComponentFixture<ModuloCartasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloCartasComponent]
    });
    fixture = TestBed.createComponent(ModuloCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
