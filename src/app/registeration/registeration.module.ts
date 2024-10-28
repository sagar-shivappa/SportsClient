import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterationRoutingModule } from './registeration-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { RegisterConfirmComponent } from './register-confirm/register-confirm.component';
import { RazorpayPaymentComponent } from './razorpay-payment/razorpay-payment.component';
import { CricketHomeComponent } from '../cricket/cricket-home/cricket-home.component';

@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterConfirmComponent,
    RazorpayPaymentComponent,
    CricketHomeComponent,
  ],
  imports: [
    CommonModule,
    RegisterationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePayButtonModule,
  ],
})
export class RegisterationModule {}
