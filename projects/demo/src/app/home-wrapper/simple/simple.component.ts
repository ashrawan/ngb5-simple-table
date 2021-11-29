import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Column, ColumnType} from 'ngb5-simple-table';
import {JSONTodoSample, TDTodoHtml, TSTodolist} from './simple.mode';
import {JSONTodoList} from '../json-sample.model';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  readonly JSONTodoList = JSONTodoList; // Data

  // Columns
  todoColumns: Column[] = [
    {id: 1, name: 'id', label: 'SN', type: ColumnType.STRING},
    {id: 2, name: 'title', label: 'Title', type: ColumnType.STRING},
    {id: 3, name: 'completed', label: 'Completed', type: ColumnType.STRING},
  ];

  // Codes to Highlight
  readonly CS_TYPESCRIPT = TSTodolist;
  readonly CS_HTML_TEMPLATE = TDTodoHtml;
  readonly CS_JSON_DATA = JSONTodoSample;

  constructor() {
  }

  ngOnInit(): void {
  }

}
