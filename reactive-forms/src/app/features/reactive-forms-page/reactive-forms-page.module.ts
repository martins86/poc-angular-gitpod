import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const materialModels = [MatAutocompleteModule, MatFormFieldModule, MatInputModule];

import { ReactiveFormsPageRoutingModule } from './reactive-forms-page-routing.module';
import { ReactiveFormsPageComponent } from './reactive-forms-page.component';


@NgModule({
  declarations: [
    ReactiveFormsPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsPageRoutingModule,
    ...materialModels
  ],
  exports: [ReactiveFormsPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReactiveFormsPageModule { }
