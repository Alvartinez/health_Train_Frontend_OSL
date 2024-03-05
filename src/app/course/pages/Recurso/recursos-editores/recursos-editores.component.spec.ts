import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosEditoresComponent } from './recursos-editores.component';

describe('RecursosEditoresComponent', () => {
  let component: RecursosEditoresComponent;
  let fixture: ComponentFixture<RecursosEditoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursosEditoresComponent]
    });
    fixture = TestBed.createComponent(RecursosEditoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
