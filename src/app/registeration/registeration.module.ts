import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterationRoutingModule } from './registeration-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RazorpayPaymentComponent } from './razorpay-payment/razorpay-payment.component';
import { CricketHomeComponent } from '../cricket/cricket-home/cricket-home.component';
import { KidsCategoryComponent } from '../category/kids-category/kids-category.component';

@NgModule({
  declarations: [
    RegisterFormComponent,
    RazorpayPaymentComponent,
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
