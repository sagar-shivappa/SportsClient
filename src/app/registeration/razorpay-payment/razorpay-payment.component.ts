import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

declare var Razorpay: any;
@Component({
  selector: 'app-razorpay-payment',
  templateUrl: './razorpay-payment.component.html',
  styleUrls: ['./razorpay-payment.component.scss'],
})
export class RazorpayPaymentComponent {
  tc: boolean = false;
  gameType: string = '';
  constructor(private route: Router) {}
  pay() {
    const paymentAmount = this.gameType == 'cricket' ? '200' : '100';
    const options = {
      key: environment.api_key, // Replace with your Razorpay key ID
      amount: paymentAmount, // Amount in paise (e.g., ₹500.00)
      currency: 'INR',
      name: 'Devanga Sports Meet 2024',
      description: 'Registration Fee for Devanga Kredothsava 2024',
      image: 'https://feji.us/c0u4s9', // Optional
      handler: (response: any) => {
        // Handle successful payment here
        this.route.navigateByUrl('register/confirm');
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        address: 'some address',
      },
      theme: {
        color: 'black',
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
