import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTemplateComponent } from './action-template.component';

describe('ActionTemplateComponent', () => {
  let component: ActionTemplateComponent;
  let fixture: ComponentFixture<ActionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
