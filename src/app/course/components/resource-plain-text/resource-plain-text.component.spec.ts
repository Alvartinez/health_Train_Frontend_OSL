import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePlainTextComponent } from './resource-plain-text.component';

describe('ResourcePlainTextComponent', () => {
  let component: ResourcePlainTextComponent;
  let fixture: ComponentFixture<ResourcePlainTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcePlainTextComponent]
    });
    fixture = TestBed.createComponent(ResourcePlainTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
