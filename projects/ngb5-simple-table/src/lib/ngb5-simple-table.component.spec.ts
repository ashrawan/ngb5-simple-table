import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Ngb5SimpleTableComponent } from './ngb5-simple-table.component';
import { ObjKeysPipe } from './pipe/obj-keys.pipe';
import { StColumnSortDirective } from './st-column-sort/st-column-sort.directive';
import { StPaginationComponent } from './st-pagination/st-pagination.component';

describe('Ngb5SimpleTableComponent', () => {
  let component: Ngb5SimpleTableComponent;
  let fixture: ComponentFixture<Ngb5SimpleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngb5SimpleTableComponent, StPaginationComponent, ObjKeysPipe, StColumnSortDirective ],
      imports: [ CommonModule, FormsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngb5SimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
