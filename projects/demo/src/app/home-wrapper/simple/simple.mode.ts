

export const TSTodolist = `
  todoColumns: Column[] = [
  { id: 1, name: 'id', label: 'SN', type: ColumnType.STRING },
  { id: 2, name: 'title', label: 'Title', type: ColumnType.STRING },
  { id: 3, name: 'completed', label: 'Completed', type: ColumnType.STRING },
  ];`;

export const TDTodoHtml = `
    <ngb5-simple-table
        [title]="'Todo List'"
        [dataList]="todoList"
        [columns]="todoColumns"
        [staticPagination]="true">
    </ngb5-simple-table>`;

export const JSONTodoSample = `
 todoList = [
    {"id":1,"title":"delectus aut autem","completed":false},
    {"id":2,"title":"quis ut nam facilis et officia qui","completed":false},
    {"id":3,"title":"fugiat veniam minus","completed":false},
    {"id":4,"title":"et porro tempora","completed":true},
    ...,
    ...,
]`;
