import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAssetComponent } from './video-asset.component';

describe('VideoAssetComponent', () => {
  let component: VideoAssetComponent;
  let fixture: ComponentFixture<VideoAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
