
<a href="http://ashrawan.github.io/ngb5-simple-table">
<div align="center">
    <h1>Ngb5SimpleTable</h1>
</div>
</a>
<p align="center">(Angular + Bootstrap 5)</p>

<div align="center">
    <h2>&#60;ngb5-simple-table /&#62;</h2>
</div>

<p align="center">
The Quick way to integrate <strong>Simple Datatable</strong> with <strong>Sortable</strong>, <strong>Searchable</strong> and <strong>Pageable</strong> features in <a href="https://angular.io/">Angular</a> app. Uses <a href="https://getbootstrap.com/docs/5.1">Bootstrap 5</a> CSS classes.
</p>

<p align="center">
<a href="https://npmjs.org/ngb5-simple-table"><img src="https://img.shields.io/npm/v/ngb5-simple-table/latest.svg" alt="npm latest version" ></a>
<br/>

</p>
</br>

## Getting Started

__ngb5-simple-table__  provides simple datatable component powered by Angular. It uses Bootstrap 5 so, you need to include Bootstrap 5 with your angular app or use CSS link.

## Installation

Install `ngb5-simple-table` from `npm`:
```bash
npm install ngb5-simple-table --save
```


## Usage

Add ```Ngb5SimpleTableModule``` to your App module's ```imports```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ngb5SimpleTableModule } from 'ngb5-simple-table';

import { AppComponent } from './app/app.component';

@NgModule({
  imports: [BrowserModule, Ngb5SimpleTableModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```


Add component to your page:
```
<ngb5-simple-table  [title]="'Todo List'"
                    [dataList]="todoList" 
                    [columns]="todoColumns" 
                    [staticPagination]="true">
</ngb5-simple-table>
```

You will also need to add __Bootstrap 5__ to you app. Either add CSS to your `index.html` or you can npm install Bootstrap.
- `Bootstrap 5`
```
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

<hr/>

## Running Demo server

1. Run `npm run lib:build` to build the library.
2. Run `ng serve` for a running demo server. 

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## For Development
- Run `npm run lib:build-watch`
- Run `npm run demo:serve`

Make live changes to project lib `"ngb5-simple-table"` and test.

### [Note: Check `package.json` for more info  ]

<hr/>

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.