import {Component, OnInit} from '@angular/core';
import {Column, ColumnType} from 'ngb5-simple-table';
import {HttpClient} from '@angular/common/http';
import {JSONATUsersSample, TDATUsersHtml, TSATUsersColumn} from './action-template.model';

@Component({
  selector: 'app-action-template',
  templateUrl: './action-template.component.html',
  styleUrls: ['./action-template.component.scss']
})
export class ActionTemplateComponent implements OnInit {

  users: [] = [];

  const;
  usersColumnsMap: Column[] = [
    {id: 1, name: 'id', label: 'SN', type: ColumnType.STRING},
    {id: 2, name: 'name', label: 'Full Name', type: ColumnType.STRING},
    {id: 3, name: 'username', label: 'UserName', type: ColumnType.STRING},
    {id: 4, name: 'address', label: 'Street', type: ColumnType.OBJECT, bindKeys: ['address', 'street']},
    {id: 5, name: 'phone', label: 'phone', cssClasses: 'badge bg-primary rounded-pill text-uppercase', type: ColumnType.STRING},
  ];

  // Codes to Highlight
  readonly CS_TYPESCRIPT = TSATUsersColumn;
  readonly CS_HTML_TEMPLATE = TDATUsersHtml;
  readonly CS_JSON_DATA = JSONATUsersSample;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
      });
  }

}
