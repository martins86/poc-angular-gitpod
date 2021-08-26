import { Component } from '@angular/core';
import { CsvTypeA } from './models/csv-type-a.model';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss'],
})
export class UploadPageComponent {
  csvUploaded: CsvTypeA[] = [];

  receivingNewFile(event: CsvTypeA[]): void {
    this.csvUploaded.push(...event);
  }
}
