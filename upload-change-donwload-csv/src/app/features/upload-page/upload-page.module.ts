import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPageRoutingModule } from './upload-page-routing.module';
import { UploadPageComponent } from './upload-page.component';


@NgModule({
  declarations: [
    UploadPageComponent
  ],
  imports: [
    CommonModule,
    UploadPageRoutingModule
  ]
})
export class UploadPageModule { }
