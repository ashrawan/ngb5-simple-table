export const TSUserslist = `
  todoColumns: Column[] = [
  {id: 1, name: 'id', label: 'SN', type: ColumnType.STRING},
  {id: 2, name: 'name', label: 'Full Name', type: ColumnType.STRING},
  {id: 3, name: 'username', label: 'UserName', type: ColumnType.STRING},
  {id: 4, name: 'address', label: 'Street', type: ColumnType.OBJECT, bindKeys: ['address', 'street']},
  {id: 5, name: 'phone', label: 'phone', cssClasses: 'badge rounded-pill text-uppercase', type: ColumnType.STRING},
  ];`;

export const TDUserHtml = `
    <ngb5-simple-table
        [title]="'Users List'"
        [dataList]="users"
        [columns]="usersColumnsMap"
        [staticPagination]="true">
    </ngb5-simple-table>`;

export const JSONUserSample = `
 users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
    },
    "phone": "1-770-736-8031 x56442"
  },
    ...,
    ...,
]`;
