import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {Column, ColumnType} from 'ngb5-simple-table';
import {JSONUserSample, TDUserHtml, TSUserslist} from './custom-css.model';

@Component({
  selector: 'app-custom-css',
  templateUrl: './custom-css.component.html',
  styleUrls: ['./custom-css.component.scss']
})
export class CustomCssComponent implements OnInit {

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
  readonly CS_TYPESCRIPT = TSUserslist;
  readonly CS_HTML_TEMPLATE = TDUserHtml;
  readonly CS_JSON_DATA = JSONUserSample;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
      });
  }

}
