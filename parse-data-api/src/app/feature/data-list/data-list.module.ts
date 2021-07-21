import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataListRoutingModule } from './data-list-routing.module';
import { DataListComponent } from './data-list.component';


@NgModule({
  declarations: [
    DataListComponent
  ],
  imports: [
    CommonModule,
    DataListRoutingModule
  ],
  exports: [
    DataListComponent
  ],
})
export class DataListModule { }
