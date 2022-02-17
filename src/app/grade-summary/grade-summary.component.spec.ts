 /*
============================================
; Title: grade-summary.component.spec.ts
; Author: Professor Krasso
; Date: 02/08/2022
; Modified By: Keith Hall
; Description: component.spec.ts file for the grade-summary component.
;===========================================
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSummaryComponent } from './grade-summary.component';

describe('GradeSummaryComponent', () => {
  let component: GradeSummaryComponent;
  let fixture: ComponentFixture<GradeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
