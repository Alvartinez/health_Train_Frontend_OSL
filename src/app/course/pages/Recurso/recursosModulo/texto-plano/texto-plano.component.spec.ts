import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlanoComponent } from './texto-plano.component';

describe('TextoPlanoComponent', () => {
  let component: TextoPlanoComponent;
  let fixture: ComponentFixture<TextoPlanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlanoComponent]
    });
    fixture = TestBed.createComponent(TextoPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
