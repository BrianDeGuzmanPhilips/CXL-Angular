import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeAssetComponent } from './iframe-asset.component';

describe('IframeAssetComponent', () => {
  let component: IframeAssetComponent;
  let fixture: ComponentFixture<IframeAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
