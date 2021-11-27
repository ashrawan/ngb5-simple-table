import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngb5SimpleTableComponent } from './ngb5-simple-table.component';

describe('Ngb5SimpleTableComponent', () => {
  let component: Ngb5SimpleTableComponent;
  let fixture: ComponentFixture<Ngb5SimpleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngb5SimpleTableComponent ]
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
