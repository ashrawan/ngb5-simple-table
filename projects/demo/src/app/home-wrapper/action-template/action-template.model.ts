export const TSATUsersColumn = `
  todoColumns: Column[] = [
  {id: 1, name: 'id', label: 'SN', type: ColumnType.STRING},
  {id: 2, name: 'name', label: 'Full Name', type: ColumnType.STRING},
  {id: 3, name: 'username', label: 'UserName', type: ColumnType.STRING},
  {id: 4, name: 'address', label: 'Street', type: ColumnType.OBJECT, bindKeys: ['address', 'street']},
  {id: 5, name: 'phone', label: 'phone', cssClasses: 'badge rounded-pill text-uppercase', type: ColumnType.STRING},
  ];`;

export const TDATUsersHtml = `
    <ngb5-simple-table
        [title]="'Users List'"
        [dataList]="users"
        [columns]="usersColumnsMap"
        [staticPagination]="true"
        [actionTemplate]="{'Website': exampleTemplate, 'Additional Details': viewTemplate}">
    </ngb5-simple-table>

    <ng-template #exampleTemplate let-data>
      <a class="nav-link" href="{{data.website}}">
        <span>{{data.website}}</span>
      </a>
    </ng-template>

    <ng-template #viewTemplate let-data>
      <div>
        <p class="border-bottom border-2">FullName: {{data.name}}}</p>
        <p class="fw-light">Address: {{data?.address?.street}}, {{data?.address?.suite}}, {{data?.address?.city}}</p>
        <p class="fw-light">Company: {{data?.company?.name}}, {{data?.company?.catchPhrase}}</p>
      </div>
    </ng-template>
`;

export const JSONATUsersSample = `
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
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
    { ... },
    { ... }
]`;
