import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDropdownsComponent } from './content-dropdowns.component';

describe('ContentDropdownsComponent', () => {
  let component: ContentDropdownsComponent;
  let fixture: ComponentFixture<ContentDropdownsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentDropdownsComponent]
    });
    fixture = TestBed.createComponent(ContentDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
