import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-forms/register-form.component';
import { RegisterationHomeComponent } from './registeration-home/registeration-home.component';

const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', component: RegisterationHomeComponent },
      { path: ':gameType', component: RegisterFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterationRoutingModule {}
