import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { TabletComponent } from './pages/tablet/tablet.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { PageFiveComponent } from './pages/page-five/page-five.component';
import { PageSixComponent } from './pages/page-six/page-six.component';
import { PageSevenComponent } from './pages/page-seven/page-seven.component';
import { VideoAssetComponent } from './components/video-asset/video-asset.component';
import { IframeAssetComponent } from './components/iframe-asset/iframe-asset.component';
import { ImageAssetComponent } from './components/image-asset/image-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PageOneComponent,
    TabletComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent,
    VideoAssetComponent,
    IframeAssetComponent,
    ImageAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
