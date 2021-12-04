import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRatingComponent } from './star-rating/star-rating.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    StarRatingComponent
  ],
})
export class ComponentsModule { }
