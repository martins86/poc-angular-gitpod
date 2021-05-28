import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';

const primengModules = [
  TableModule,
  ToastModule,
  CalendarModule,
  SliderModule,
  MultiSelectModule,
  ContextMenuModule,
  DialogModule,
  ButtonModule,
  DropdownModule,
  ProgressBarModule,
  InputTextModule,
];

import { CustomersPageRoutingModule } from './customers-page-routing.module';
import { CustomersPageComponent } from './customers-page.component';
import { CustomerService } from './shared/services/cusomer.service';


@NgModule({
  declarations: [
    CustomersPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CustomersPageRoutingModule,
    ...primengModules,
  ],
  providers: [CustomerService],
  exports: [
    CustomersPageComponent
  ],
})
export class CustomersPageModule { }
