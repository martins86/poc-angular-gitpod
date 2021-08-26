import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPageRoutingModule } from './upload-page-routing.module';
import { UploadPageComponent } from './upload-page.component';
import { InputUploadModule } from './components/input-upload/input-upload.module';
import { TableModule } from './components/table/table.module';

@NgModule({
  declarations: [UploadPageComponent],
  imports: [
    CommonModule,
    UploadPageRoutingModule,
    InputUploadModule,
    TableModule,
  ],
  exports: [UploadPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UploadPageModule {}
