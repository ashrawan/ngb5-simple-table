import { Component, OnInit } from '@angular/core';
import { Column, ColumnType } from 'ngb5-simple-table';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  todoList: Array<any> = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
  ];

  todoColumns: Column[] = [
    {id: 1, name: 'id', label: 'SN', type: ColumnType.STRING},
    {id: 1, name: 'title', label: 'Title', type: ColumnType.STRING},
    {id: 1, name: 'completed', label: 'Completed', type: ColumnType.STRING},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
