
export type SortDirection = 'asc' | 'desc' ;
export const SortRotation: { [key: string]: SortDirection } = { asc: 'desc', desc: 'asc' };

export interface SortEvent {
  column: Column;
  direction: SortDirection;
}
export interface TableStateEvent {
  sortEvent: SortEvent;
  pageNo: number;
  pageSize: number;
}


export enum ColumnType {
  STRING = 'string', NUMBER = 'number', DATE = 'date', LINK = 'link', OBJECT = 'OBJECT', OTHER = 'other'
}

export interface Column {
  id: number;
  name: string;
  label: string;
  type: ColumnType;
  bindKeys?: Array<string>;
  cssClasses?: string;
  cssValueMap?: { [dataValue: string]: string };
  sortable?: boolean;
  filterable?: boolean;
  hide?: boolean;
  parseValue?: (func: (item) => string ) => string;
}

// Table Display Properties
export class TableUI {
  tableBordered: boolean = true;
  tableResponsive: boolean = true;
  tableHover: boolean = true;
  tableStripped: boolean = true;
  additionalCSSClass: string = '';
  // TODO Pagination Display Config
}
