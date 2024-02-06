import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePodcastComponent } from './resource-podcast.component';

describe('ResourcePodcastComponent', () => {
  let component: ResourcePodcastComponent;
  let fixture: ComponentFixture<ResourcePodcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcePodcastComponent]
    });
    fixture = TestBed.createComponent(ResourcePodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
