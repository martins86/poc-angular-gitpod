import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CsvTypeA } from '../../models/csv-type-a.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input()
  csvUploaded!: CsvTypeA[];

  @Input()
  csvUploadedHeaders!: string[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns!: string[];

  dataSource!: MatTableDataSource<CsvTypeA>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.csvUploaded && changes.csvUploadedHeaders) {
      this.dataSource = new MatTableDataSource(this.csvUploaded);
      this.displayedColumns = this.csvUploadedHeaders;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
