import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  jsonToCsv(csvData: any, csvArrayHeader: string[]): any {
    let array = typeof csvData != 'object' ? JSON.parse(csvData) : csvData;
    let str = '';
    let row = '';

    row = row.slice(0, -1);
    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in csvArrayHeader) {
        let head = csvArrayHeader[index];

        line += array[i][head] + ',';
      }
      str += line + '\r\n';
    }
    return str;
  }
}
