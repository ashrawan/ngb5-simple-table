import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPaginationComponent } from './st-pagination.component';

describe('StPaginationComponent', () => {
  let component: StPaginationComponent;
  let fixture: ComponentFixture<StPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
