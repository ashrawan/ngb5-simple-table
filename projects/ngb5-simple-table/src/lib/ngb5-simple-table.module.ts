import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObjKeysPipe } from './pipe/obj-keys.pipe';
import { StColumnSortDirective } from './st-column-sort/st-column-sort.directive';
import { StPaginationComponent } from './st-pagination/st-pagination.component';
import { Ngb5SimpleTableComponent } from './ngb5-simple-table.component';


@NgModule({
  declarations: [
    StPaginationComponent,
    ObjKeysPipe,
    StColumnSortDirective,
    Ngb5SimpleTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [Ngb5SimpleTableComponent]
})
export class Ngb5SimpleTableModule { }
