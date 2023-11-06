import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterationRoutingModule } from './registeration-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePayButtonModule,
  ],
})
export class RegisterationModule {}
