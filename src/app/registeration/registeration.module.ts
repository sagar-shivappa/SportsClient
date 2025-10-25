import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterationRoutingModule } from './registeration-routing.module';
import { RegisterFormComponent } from './register-forms/register-form.component';
import { RegisterationHomeComponent } from './registeration-home/registeration-home.component';
import { CricketHomeComponent } from '../cricket/cricket-home/cricket-home.component';
import { KidsCategoryComponent } from '../category/kids-category/kids-category.component';

@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterationHomeComponent,
    CricketHomeComponent,
  ],
  imports: [
    CommonModule,
    RegisterationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    KidsCategoryComponent,
  ],
})
export class RegisterationModule {}
