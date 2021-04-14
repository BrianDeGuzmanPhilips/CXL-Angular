import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFiveComponent } from './pages/page-five/page-five.component';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageSevenComponent } from './pages/page-seven/page-seven.component';
import { PageSixComponent } from './pages/page-six/page-six.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { TabletComponent } from './pages/tablet/tablet.component';

const routes: Routes = [
  { path: 'page1', component: PageOneComponent },
  { path: 'page2', component: PageTwoComponent },
  { path: 'page3', component: PageThreeComponent },
  { path: 'page4', component: PageFourComponent },
  { path: 'page5', component: PageFiveComponent },
  { path: 'page6', component: PageSixComponent },
  { path: 'page7', component: PageSevenComponent },
  { path: 'tablet', component: TabletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
