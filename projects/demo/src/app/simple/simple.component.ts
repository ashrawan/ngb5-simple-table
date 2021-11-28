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
      "id": 6,
      "title": "est dicta totam qui explicabo doloribus qui dignissimos",
      "completed": false
    },
    {
      "id": 7,
      "title": "perspiciatis velit id laborum placeat iusto et aliquam odio",
      "completed": false
    },
    {
      "id": 8,
      "title": "et sequi qui architecto ut adipisci",
      "completed": true
    },
    {
      "id": 9,
      "title": "odit optio omnis qui sunt",
      "completed": true
    },
    {
      "id": 10,
      "title": "et placeat et tempore aspernatur sint numquam",
      "completed": false
    },
    {
      "id": 11,
      "title": "doloremque aut dolores quidem fuga qui nulla",
      "completed": true
    },
    {
      "id": 12,
      "title": "voluptas consequatur qui ut quia magnam nemo esse",
      "completed": false
    },
    {
      "id": 13,
      "title": "fugiat pariatur ratione ut asperiores necessitatibus magni",
      "completed": false
    },
    {
      "id": 14,
      "title": "rerum eum molestias autem voluptatum sit optio",
      "completed": false
    },
    {
      "id": 15,
      "title": "quia voluptatibus voluptatem quos similique maiores repellat",
      "completed": false
    },
    {
      "id": 16,
      "title": "aut id perspiciatis voluptatem iusto",
      "completed": false
    },
    {
      "id": 17,
      "title": "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
      "completed": false
    },
  ];

  todoColumns: Column[] = [
    { id: 1, name: 'id', label: 'SN', type: ColumnType.STRING },
    { id: 2, name: 'title', label: 'Title', type: ColumnType.STRING },
    { id: 3, name: 'completed', label: 'Completed', type: ColumnType.STRING },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
