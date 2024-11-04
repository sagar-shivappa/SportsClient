import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';
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
  loader$ = this.loader.loading$;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegisterService,
    private loader: LoaderService
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

  ngOnInit() {}

  registerPlayer() {
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
