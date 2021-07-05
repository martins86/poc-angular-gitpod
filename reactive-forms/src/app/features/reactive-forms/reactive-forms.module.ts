import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsComponent } from './reactive-forms.component';


@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule
  ],
  exports: [ReactiveFormsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReactiveFormsModule { }
