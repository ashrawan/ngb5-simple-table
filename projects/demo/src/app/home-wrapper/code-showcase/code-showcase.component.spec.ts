import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeShowcaseComponent } from './code-showcase.component';

describe('CodeShowcaseComponent', () => {
  let component: CodeShowcaseComponent;
  let fixture: ComponentFixture<CodeShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
