
export interface PagesModel {
  text: string;
  number: number;
  active: boolean;
}

export interface PageChangedEvent {
  itemsPerPage: number;
  page: number;
}
