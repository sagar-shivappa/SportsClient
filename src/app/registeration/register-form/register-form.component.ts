import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registrationForm: FormGroup;
  confirmationInfo: any;
  showConfirmation: boolean = false;
  paymentRequest!: google.payments.api.PaymentDataRequest;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegisterService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      age: new FormControl('', [
        Validators.required,
        Validators.pattern('[123456789][0-9]?'),
      ]),
      gender: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[7896][0-9]{9}'),
      ]),
      cricket: new FormControl('No'),
      cricketPlayerType: new FormControl('N/A'),
      paymentType: new FormControl('', Validators.required),
      paymentStatus: new FormControl('No'),
    });
  }

  ngOnInit() {
    this.paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA', 'AMEX'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'example',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: '0123456789',
        merchantName: 'Demo Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '100',
        currencyCode: 'INR',
        countryCode: 'IN',
      },
    };
  }

  onSubmit() {
    console.log('submit', this.registrationForm.value);
    this.registrationService
      .register(this.registrationForm.value)
      .subscribe((data) => {
        this.confirmationInfo = data;
        this.showConfirmation = true;
      });
  }
  get getcontactNumber() {
    return this.registrationForm.get('contactNumber');
  }
  get getAge() {
    return this.registrationForm.get('age');
  }

  async onLoadpaymentData(event: Event) {
    const eventDetails = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetails);
  }
  onPaymentDataAuth: google.payments.api.PaymentAuthorizedHandler = (
    paymentData
  ) => {
    console.log('payment authorized', paymentData);
    return {
      transactionState: 'SUCCESS',
    };
  };
  onError(event: Event) {
    console.log('errro', event);
  }
}
