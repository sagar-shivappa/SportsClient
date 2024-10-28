import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var Razorpay: any;
@Component({
  selector: 'app-razorpay-payment',
  templateUrl: './razorpay-payment.component.html',
  styleUrls: ['./razorpay-payment.component.scss'],
})
export class RazorpayPaymentComponent {
  tc: boolean = false;
  constructor(private route: Router) {}
  pay() {
    const options = {
      key: 'rzp_test_fFPfAbmashyfLE', // Replace with your Razorpay key ID
      amount: 100, // Amount in paise (e.g., ₹500.00)
      currency: 'INR',
      name: 'Devanga Sports Meet 2024',
      description: 'Registration Fee for Devanga Kredothsava 2024',
      image: 'https://example.com/your_logo', // Optional
      handler: (response: any) => {
        // Handle successful payment here
        this.route.navigateByUrl('register/confirm');
        console.log('Payment Successful', response);
        // You can send this response to your server for verification if needed
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
