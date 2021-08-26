import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CsvTypeA, CommaSeparated } from '../../models/csv-type-a.model';

@Component({
  selector: 'app-input-upload',
  templateUrl: './input-upload.component.html',
  styleUrls: ['./input-upload.component.scss'],
})
export class InputUploadComponent {
  @ViewChild('csvUploaded') csvUploaded: any;

  @Output() emitNewFile = new EventEmitter<CsvTypeA[]>();

  receivingCsv(event: any): void {
    let files = event.srcElement.files;

    if (files.length == 0) return;

    if (this.isValidCSVFile(files[0])) {
      let inputFile = event.target.files[0];
      let reader = new FileReader();

      reader.readAsText(inputFile);

      reader.onload = () => {
        let csvData = reader.result;
        let csvUploadedArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvUploadedArray);

        this.emitNewFile.emit(
          this.getDataUploadedArrayFromCSVFile(
            csvUploadedArray,
            headersRow.length
          )
        );
      };

      reader.onerror = () => {
        console.error('Ocorreu um erro durante o carregamento do csv!');
      };
    } else {
      alert('Por favor importe um .csv válido.');
      this.resetCsvUploaded();
    }
  }

  getDataUploadedArrayFromCSVFile(
    csvUploadedArray: any,
    headerLength: any
  ): any {
    let csvArray = [];

    for (let i = 0; i < csvUploadedArray.length; i++) {
      let currentUploaded = (<string>csvUploadedArray[i]).split(
        CommaSeparated.Semicolon
      );

      if (currentUploaded.length == headerLength) {
        let csvRecord: CsvTypeA = new CsvTypeA();

        if (i > 0) {
          let date = currentUploaded[11].trim().substring(0, 10);
          let newDateFormat = date.split('/').reverse().join('-');

          csvRecord.active = currentUploaded[1].trim();
          csvRecord.type = currentUploaded[2].trim();
          csvRecord.nature = currentUploaded[3].trim();
          csvRecord.status = currentUploaded[4].trim();
          csvRecord.qtyExecuted = parseInt(currentUploaded[9].trim());
          csvRecord.averagePrice = parseFloat(currentUploaded[10].trim());
          csvRecord.createdIn = newDateFormat;

          csvArray.push(csvRecord);
        }
      }
    }
    return csvArray;
  }

  isValidCSVFile(file: any): any {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvUploadedArray: any): any {
    let headers = (<string>csvUploadedArray[0]).split(CommaSeparated.Semicolon);
    let headerArray = [];
    for (let i = 0; i < headers.length; i++) {
      headerArray.push(headers[i]);
    }
    return headerArray;
  }

  resetCsvUploaded(): void {
    this.csvUploaded.nativeElement.value = '';
    this.emitNewFile.emit([]);
  }
}
