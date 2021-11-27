import { Component, OnInit } from '@angular/core';
import { Column, ColumnType } from 'ngb5-simple-table';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  todoList = [
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
    {
      "id": 58,
      "title": "est dicta totam qui explicabo doloribus qui dignissimos",
      "completed": false
    },
    {
      "id": 59,
      "title": "perspiciatis velit id laborum placeat iusto et aliquam odio",
      "completed": false
    },
    {
      "id": 60,
      "title": "et sequi qui architecto ut adipisci",
      "completed": true
    },
    {
      "id": 61,
      "title": "odit optio omnis qui sunt",
      "completed": true
    },
    {
      "id": 62,
      "title": "et placeat et tempore aspernatur sint numquam",
      "completed": false
    },
    {
      "id": 63,
      "title": "doloremque aut dolores quidem fuga qui nulla",
      "completed": true
    },
    {
      "id": 64,
      "title": "voluptas consequatur qui ut quia magnam nemo esse",
      "completed": false
    },
    {
      "id": 65,
      "title": "fugiat pariatur ratione ut asperiores necessitatibus magni",
      "completed": false
    },
    {
      "id": 66,
      "title": "rerum eum molestias autem voluptatum sit optio",
      "completed": false
    },
    {
      "id": 67,
      "title": "quia voluptatibus voluptatem quos similique maiores repellat",
      "completed": false
    },
    {
      "id": 68,
      "title": "aut id perspiciatis voluptatem iusto",
      "completed": false
    },
    {
      "id": 69,
      "title": "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
      "completed": false
    },
    {
      "id": 70,
      "title": "ut sequi accusantium et mollitia delectus sunt",
      "completed": false
    },
  ];

  todoColumns: Column[] = [
    { id: 1, name: 'id', label: 'SN', type: ColumnType.STRING },
    { id: 1, name: 'title', label: 'Title', type: ColumnType.STRING },
    { id: 1, name: 'completed', label: 'Completed', type: ColumnType.STRING },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
