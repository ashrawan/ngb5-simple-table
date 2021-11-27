import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {get as _get} from 'lodash';
import {cloneDeep as _cloneDeep} from 'lodash';
import { Column, ColumnType, SortDirection, SortEvent, TableStateEvent } from './ngb5-simple-table.model';

@Component({
  selector: 'lib-ngb5-simple-table',
  templateUrl: './ngb5-simple-table.component.html',
  styles: [  ]
})
export class Ngb5SimpleTableComponent implements OnInit, OnChanges {

  readonly ColumnType = ColumnType;

  @Input() title = '';
  @Input() columns: Column[];
  @Input() dataList: Array<any> = [];
  @Input() totalElements = 0; // Not required if "staticPagination = true"

  // Optional Fields
  @Input() pageSize = 10;
  @Input() sortColumnName: string;
  @Input() searchTemplate: TemplateRef<any>;
  @Input() actionTemplate: { [columnName: string]: TemplateRef<any> };

  /**
   * with staticPagination = true: Performs Client side pagination, No dynamic data fetch required,
   * But Emtited values are still available
   * Pgination is done on the full "dataList" using slicing operation
   */
  @Input() staticPagination = false;

  // Output
  @Output() sort = new EventEmitter<SortEvent>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() tableStateEvent = new EventEmitter<TableStateEvent>();

  sortColumn: Column;
  currentPage = 1;
  sortDirection: SortDirection = 'asc';

  searchTerm = '';
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;

  isCaseSensitiveSearch = false;
  noDataColumnCount: number;
  tempFullDataList: Array<any> = []; // temp full data list for "staticPagination"

  constructor(private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.initializeDefaultValues();
  }

  initializeDefaultValues(): void {
    if (this.dataList === null || this.dataList === undefined) {
      this.dataList = [];
    }
    if (this.dataList.length <= 0) {
      this.noDataColumnCount = this.columns?.length || 0 + Object.keys(this.actionTemplate)?.length || 0;
    }
    if (this.staticPagination) {
      this.tempFullDataList = _cloneDeep(this.dataList);
      this.totalElements = this.dataList.length;
    }
    if ((this.columns?.length > 0) && !(this.sortColumnName && this.sortColumnName.length > 0)) {
      this.sortColumn = this.columns[0];
      this.sortColumnName = this.columns[0].name;
    }
    this.changeDetection.detectChanges();
  }

  onSortTriggered(sortEvent: SortEvent): void {
    console.log('onSortTriggered ', sortEvent);
    this.sortColumn = sortEvent.column;
    this.sortColumnName = sortEvent.column.name;
    this.sortDirection = sortEvent.direction;
    if (this.staticPagination) {
      const dataList = this.dataList.sort((a: any, b: any) => this.compareForSort(a, b));
      this.dataList = this.sortDirection === 'asc' ? dataList : dataList.reverse();
    }
    this.sort.emit(sortEvent);
    this.prepareAndEmitTableStateEvent();
  }

  private compareForSort(a, b): number {
    const columnName = this.sortColumn.name;
    let firstColumnValue = a[columnName];
    let secondColumnValue = b[columnName];
    if (this.sortColumn.type === ColumnType.OBJECT) {
      firstColumnValue = this.getObjValueFromPath(a, this.sortColumn.bindKeys);
      secondColumnValue = this.getObjValueFromPath(b, this.sortColumn.bindKeys);
    }
    if (firstColumnValue === secondColumnValue) {
      return 0;
    }
    return firstColumnValue > secondColumnValue ? 1 : -1;
  }


  onPageChangeTriggered($event): void {
    console.log('onPageChangeTriggered ', this.currentPage);
    this.pageChange.emit(this.currentPage);
    this.prepareAndEmitTableStateEvent();
  }

  onPageSizeChange(): void {
    console.log('onPageSizeChange ', this.pageSize);
    this.prepareAndEmitTableStateEvent();
  }

  private prepareAndEmitTableStateEvent(): void {
    const tableStateEvent: TableStateEvent = {
      sortEvent: {column: this.sortColumn, direction: this.sortDirection},
      pageNo: this.currentPage,
      pageSize: this.pageSize,
    };
    console.log('emitting table state event ', tableStateEvent);
    this.changeDetection.detectChanges();
    this.tableStateEvent.emit(tableStateEvent);
  }

  toggleCaseSensitive(): void {
    this.isCaseSensitiveSearch = !this.isCaseSensitiveSearch;
    this.offlineSearchInTable();
    this.searchInput?.nativeElement?.focus();
  }

  offlineSearchInTable(): void {
    if (this.searchTerm && this.searchTerm.length > 0) {
      const searchTerm = this.searchTerm;
      const filteredDataList = this.tempFullDataList.filter(obj => {
        // check if present in any object value
        let hasMatch = false;
        for (const column of this.columns) {
          let hasSearchTerm = false;
          if (column.type === ColumnType.OBJECT) {
            const value = this.getObjValueFromPath(obj, column.bindKeys) || '';
            hasSearchTerm = this.checkIfIncludesTerm(value, searchTerm);
          } else {
            const value = obj[column.name] || '';
            hasSearchTerm = this.checkIfIncludesTerm(value.toString(), searchTerm);
          }
          hasMatch = hasSearchTerm;
          if (hasMatch) {
            break;
          }
        }
        return hasMatch;
      });
      this.dataList = filteredDataList;
    } else {
      this.dataList = this.tempFullDataList;
    }
    this.changeDetection.detectChanges();
  }

  private checkIfIncludesTerm(value: string, term: string): boolean {
    if (this.isCaseSensitiveSearch) {
      return value.includes(term);
    }
    return value.toLowerCase().includes(term.toLowerCase());
  }

  getObjValueFromPath(object, path: Array<string>): string {
    return _get(object, path);
  }

}
