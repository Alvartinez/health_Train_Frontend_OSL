import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleBaseComponent } from './module-base.component';

describe('ModuleBaseComponent', () => {
  let component: ModuleBaseComponent;
  let fixture: ComponentFixture<ModuleBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleBaseComponent]
    });
    fixture = TestBed.createComponent(ModuleBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
