import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.scss'],
})
export class RegisterConfirmComponent {
  @Input() confirmation: any;
}
