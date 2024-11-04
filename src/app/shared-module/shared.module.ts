import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule],
  exports: [FeaturesComponent],
})
export class SharedModule {}
