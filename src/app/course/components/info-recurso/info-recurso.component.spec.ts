import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecursoComponent } from './info-recurso.component';

describe('InfoRecursoComponent', () => {
  let component: InfoRecursoComponent;
  let fixture: ComponentFixture<InfoRecursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoRecursoComponent]
    });
    fixture = TestBed.createComponent(InfoRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
