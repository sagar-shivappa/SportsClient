import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [FeaturesComponent, SpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [FeaturesComponent, SpinnerComponent],
})
export class SharedModule {}
