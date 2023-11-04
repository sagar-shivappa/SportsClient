import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[789][0-9]{9}'),
      ]),
      cricket: new FormControl('', [Validators.required]),
      cricketPlayerType: new FormControl(''),
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log('submit', this.registrationForm.value);
  }
}