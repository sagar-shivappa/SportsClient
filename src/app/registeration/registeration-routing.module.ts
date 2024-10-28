import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RazorpayPaymentComponent } from './razorpay-payment/razorpay-payment.component';

const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', component: RazorpayPaymentComponent },
      { path: 'confirm', component: RegisterFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterationRoutingModule {}
