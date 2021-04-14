import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAssetComponent } from './image-asset.component';

describe('ImageAssetComponent', () => {
  let component: ImageAssetComponent;
  let fixture: ComponentFixture<ImageAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
