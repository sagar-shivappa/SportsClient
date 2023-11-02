import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CricketHomeComponent } from './cricket-home/cricket-home.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: CricketHomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CricketRoutingModule {}
