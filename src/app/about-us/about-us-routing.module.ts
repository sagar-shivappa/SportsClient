import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsHomeComponent } from './about-us-home/about-us-home.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: AboutUsHomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
