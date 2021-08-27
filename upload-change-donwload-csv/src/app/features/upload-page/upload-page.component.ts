import { Component } from '@angular/core';
import { CsvTypeA } from './models/csv-type-a.model';
import { ConvertService } from './services/convert.service';
import { DownloadFileService } from './services/download-file.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss'],
})
export class UploadPageComponent {
  csvUploaded: CsvTypeA[] = [];

  constructor(
    private serviceDonwload: DownloadFileService,
    private serviceConvert: ConvertService
  ) {}

  receivingNewFile(event: CsvTypeA[]): void {
    this.csvUploaded.push(...event);
  }

  csvUploadedHeaders = [
    'active',
    'type',
    'nature',
    'status',
    'qtyExecuted',
    'averagePrice',
    'createdIn',
  ];

  downloadCsvFile(): void {
    let csvData = this.serviceConvert.jsonToCsv(
      this.csvUploaded,
      this.csvUploadedHeaders
    );

    this.serviceDonwload.csv(csvData);
  }
}
